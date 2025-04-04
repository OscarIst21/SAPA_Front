import React from "react";
import { Card, Statistic, Table, Button, DatePicker } from "antd";
import { Column } from "@ant-design/plots";
import ReactApexChart from "react-apexcharts";

import "../styless/Dashboard.css";

const Dashboard = () => {
  const columnConfig = {
    data: [
      { category: "Ene", value: 10 },
      { category: "Feb", value: 15 },
      { category: "Mar", value: 20 },
      { category: "Abr", value: 8 },
      { category: "May", value: 12 },
    ],
    xField: "category",
    yField: "value",
    color: "#E67E22",
  };

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
        <Button> Día </Button>
        <Button> Semana </Button>
        <Button> Mes </Button>
        <Button> Año </Button>
        <DatePicker picker="month" />
      </div>
      
      <div className="dashboard-grid">
        <Card title="Total gastado" className="dashboard-card">
          <Statistic value={1000000} prefix="$" suffix="24%" />
        </Card>
        <Card title="Avance del proyecto" className="dashboard-card">
          <Statistic value={60.56} suffix="%" />
        </Card>
        <Card className="dashboard-card"><Column {...columnConfig} /></Card>
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
