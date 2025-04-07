import React from "react";
import { Card, Statistic, Table, Button, DatePicker } from "antd";
import { Column } from "@ant-design/plots";
import ReactApexChart from "react-apexcharts";

import "../styless/Dashboard.css";

const Dashboard = () => {
  const barChartOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    plotOptions: {
      bar: {
        distributed: true, // para aplicar un color por barra si quieres
        borderRadius: 4,
      },
    },
    colors: ["#E67E22"], // <-- Naranja
    xaxis: {
      categories: ["Ene", "Feb", "Mar", "Abr", "May"],
    },
    dataLabels: {
      enabled: false,
    },
    title: {
      text: "Gasto mensual",
      align: "center",
    },
  };
    
  const barChartSeries = [
    {
      name: "Gasto",
      data: [10, 15, 20, 8, 12],
    },
  ];
  

  const pieConfig = {
    series: [70, 30],
    labels: ["Avance", "Restante"],
    colors: ["#E67E22", "#ddd"],
  };

  const columns = [
    { title: "Fecha", dataIndex: "fecha", key: "fecha" },
    { title: "Descripción", dataIndex: "descripcion", key: "descripcion" },
    { title: "Proyecto", dataIndex: "proyecto", key: "proyecto" },
    { title: "Área", dataIndex: "area", key: "area" },
    { title: "Monto", dataIndex: "monto", key: "monto" },
  ];

  const data = [
    {
      key: "1",
      fecha: "21/02/25",
      descripcion: "Pago de lorem ipsdw",
      proyecto: "Reestructuración Dirección general",
      area: "DG",
      monto: "$100,000",
    },
    {
      key: "2",
      fecha: "01/02/25",
      descripcion: "Pago",
      proyecto: "Reestructuración Dirección general",
      area: "DG",
      monto: "$60,000",
    },
  ];

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
  <div className="dashboard-buttons">
    <Button className="filtro-btn">Día</Button>
    <Button className="filtro-btn">Semana</Button>
    <Button className="filtro-btn">Mes</Button>
    <Button className="filtro-btn">Año</Button>
  </div>

  <div className="dashboard-date">
    <DatePicker picker="month" className="custom-datepicker" />
  </div>
</div>

      
      <div className="dashboard-grid">
      <Card title="Total gastado" className="dashboard-card">
        <div className="statistic-split">
          <span className="stat-value">$1,000,000</span>
          <span className="stat-percent">24%</span>
        </div>
      </Card>

        <Card title="Avance del proyecto" className="dashboard-card">
          <Statistic value={60.56} suffix="%" />
        </Card>
        <Card className="dashboard-card">
          <ReactApexChart
            options={barChartOptions}
            series={barChartSeries}
            type="bar"
            height={250}
          />
</Card>

        <Card className="dashboard-card">
  <ReactApexChart
    options={{
      labels: pieConfig.labels,
      colors: pieConfig.colors,
      chart: { type: "donut" },
    }}
    series={pieConfig.series}
    type="donut"
    height={250}
  />
</Card>

      </div>
      
      <Card title="Historial de gastos" className="dashboard-table">
        <Table columns={columns} dataSource={data} pagination={false} />
      </Card>
    </div>
  );
};

export default Dashboard;
