import React, { useState } from "react";
import "../styless/Programas.css";
import Proyectos from "../../Proyectos/jsx/Proyectos";

const programasData = [
  {
    id: "prog001",
    nombre: "Programa de Desarrollo Social",
    año: 2024,
    presupuesto: 500000,
    presupuestoUsado: 320000,
    descripcion: "Programa enfocado en el desarrollo de comunidades vulnerables.",
    status: "Activo",
    areas: ["Social", "Educación"],
  },
  {
    id: "prog002",
    nombre: "Programa de Infraestructura",
    año: 2024,
    presupuesto: 1200000,
    presupuestoUsado: 800000,
    descripcion: "Mejoramiento de infraestructura urbana y rural.",
    status: "Activo",
    areas: ["Obras Públicas", "Planeación"],
  },
  {
    id: "prog003",
    nombre: "Programa de Capacitación",
    año: 2023,
    presupuesto: 300000,
    presupuestoUsado: 280000,
    descripcion: "Capacitación profesional para servidores públicos.",
    status: "Completado",
    areas: ["Recursos Humanos", "Administración"],
  },
];

const Programas = () => {
  const [programaActivo, setProgramaActivo] = useState(null);
  const [vistaDetalle, setVistaDetalle] = useState(false);

  const mostrarDetalle = (programa) => {
    setProgramaActivo(programa);
    setVistaDetalle(true);
  };

  const volverALista = () => {
    setVistaDetalle(false);
    setProgramaActivo(null);
  };

  // Vista de Detalle del Programa
  if (vistaDetalle && programaActivo) {
    return (
      <div className="programas-container">
        <div className="detalle-header">
          <button className="btn btn-primary mb-3" onClick={volverALista}>
            ← Volver a la lista
          </button>
          <h3 className="section-title">Detalle del Programa</h3>
        </div>

        <div className="detalle-content">
          <p><strong>ID Programa:</strong> {programaActivo.id}</p>
          <p><strong>Nombre:</strong> {programaActivo.nombre}</p>
          <p><strong>Año:</strong> {programaActivo.año}</p>
          <p><strong>Presupuesto:</strong> ${programaActivo.presupuesto.toLocaleString()}</p>
          <p><strong>Presupuesto Usado:</strong> ${programaActivo.presupuestoUsado.toLocaleString()}</p>
          <p><strong>Descripción:</strong></p>
          <p>{programaActivo.descripcion}</p>
          <p><strong>Status:</strong> {programaActivo.status}</p>
          <p><strong>Áreas Involucradas:</strong> {programaActivo.areas.join(", ")}</p>

          <div className="mt-4">
            <h4 className="section-title">Proyectos del Programa</h4>
            <Proyectos />
          </div>
        </div>
      </div>
    );
  }

  // Vista de Lista de Programas
  return (
    <div className="programas-container">
      <h3 className="section-title">Lista de Programas</h3>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Año</th>
              <th>Presupuesto</th>
              <th>Presupuesto Usado</th>
              <th>Status</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {programasData.map((programa) => (
              <tr key={programa.id}>
                <td>{programa.nombre}</td>
                <td>{programa.año}</td>
                <td>${programa.presupuesto.toLocaleString()}</td>
                <td>${programa.presupuestoUsado.toLocaleString()}</td>
                <td>{programa.status}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => mostrarDetalle(programa)}
                  >
                    Ver Detalle
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Programas;