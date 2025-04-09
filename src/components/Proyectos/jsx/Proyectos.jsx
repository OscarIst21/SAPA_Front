import React, { useState } from "react";
import "../styless/Proyectos.css";
import factura1 from "../imagenes/factura1.jpg";
import factura2 from "../imagenes/factura2.jpg";
import factura3 from "../imagenes/factura3.jpg";
import FacturaTabla from "../../FacturaTabla/jsx/FacturaTabla";

const proyectosData = [
  {
    id: "proj001",
    nombre: "Implementación de ERP",
    descripcion: "Proyecto para implementar un sistema ERP en la empresa.",
    progreso: 70,
    status: "Activo",
    areas: ["Finanzas", "Operaciones"],
    avances: [
      { 
        id: "AV001",
        costo: 1500,
        fecha: "2024-02-15",
        descripcion: "Implementación fase inicial",
        evidencia: "url/to/evidence1.pdf",
      },
      {
        id: "AV002",
        costo: 2300,
        fecha: "2024-02-20",
        descripcion: "Capacitación del personal",
        evidencia: "url/to/evidence2.pdf",
      },
    ],
  },
  {
    id: "proj002",
    nombre: "Desarrollo de App Móvil",
    descripcion: "Creación de una app para manejar proyectos desde dispositivos móviles.",
    progreso: 40,
    status: "Activo",
    areas: ["TI", "Marketing"],
    facturas: [{ numero: "F003", monto: 2000, estado: "Pagada" }],
  },
  {
    id: "proj003",
    nombre: "Optimización de Procesos",
    descripcion: "Proyecto enfocado en mejorar la eficiencia de procesos internos.",
    progreso: 100,
    status: "Completado",
    areas: ["Operaciones"],
    facturas: [
      { numero: "F004", monto: 1800, estado: "Pagada" },
      { numero: "F005", monto: 1200, estado: "Pagada" },
    ],
  },
];

const Proyectos = () => {
  const [proyectoActivo, setProyectoActivo] = useState(null);
  const [vistaDetalle, setVistaDetalle] = useState(false);
  const [avanceActivo, setAvanceActivo] = useState(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [mostrarFactura, setMostrarFactura] = useState(false);

  const calcularCostoTotal = (avances) =>
    avances?.reduce((total, avance) => total + avance.costo, 0) || 0;

  const mostrarDetalle = (proyecto) => {
    setProyectoActivo(proyecto);
    setVistaDetalle(true);
  };

  const volverALista = () => {
    setVistaDetalle(false);
    setProyectoActivo(null);
    setAvanceActivo(null);
  };

  const mostrarDetalleAvance = (avance) => {
    setAvanceActivo(avance);
    setVistaDetalle(false);
  };

  const abrirModal = () => setMostrarModal(true);
  const cerrarModal = () => setMostrarModal(false);

  const ModalAvance = () => (
    <div className="custom-modal-backdrop">
      <div className="modal-window">
        <div className="modal-header-custom">
          <h5>Añadir Avance</h5>
          <button className="modal-close" onClick={cerrarModal}>×</button>
        </div>
        <div className="modal-body">
          <div className="form-group">
            <label>Costo</label>
            <input type="number" className="form-control" placeholder="Ingrese el costo" />
          </div>
          <div className="form-group mt-3">
            <label>Descripción</label>
            <textarea className="form-control" rows="3" placeholder="Descripción del avance"></textarea>
          </div>
          <div className="form-group mt-3">
            <label>Evidencia</label>
            <div className="upload-area" onClick={() => document.getElementById("fileInput").click()}>
              <p>Arrastra archivos aquí o haz clic para seleccionar</p>
              <input type="file" id="fileInput" multiple style={{ display: "none" }} />
            </div>
          </div>
          <div className="modal-actions mt-4">
            <button className="btn btn-secondary me-2" onClick={cerrarModal}>
              Cancelar
            </button>
            <button className="btn btn-primary" >
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
  

  // Remove the verDetalleFactura function completely

  if (avanceActivo) {
    return (
      <div className="proyectos-container">
        <div className="detalle-header">
          <button 
            className="btn btn-primary mb-3" 
            onClick={() => {
              setAvanceActivo(null);
              setVistaDetalle(true);
              setMostrarFactura(false);
            }}
          >
            ← Volver al proyecto
          </button>
          <h3 className="section-title">Detalle del Avance</h3>
        </div>
        <div className="detalle-content">
          <div className="card p-4">
            {!mostrarFactura ? (
              <>
                <h4 className="mb-4">Avance {avanceActivo.id}</h4>
                <p><strong>ID:</strong> {avanceActivo.id}</p>
                <p><strong>Costo:</strong> ${avanceActivo.costo.toLocaleString()}</p>
                <p><strong>Fecha:</strong> {avanceActivo.fecha}</p>
                <p><strong>Descripción:</strong></p>
                <p className="mb-4">{avanceActivo.descripcion}</p>
                <p><strong>Evidencia:</strong></p>
                <div className="mt-2 evidencias-container mb-4">
                  <img src={factura1} alt="Factura 1" className="evidencia-img" />
                  <img src={factura2} alt="Factura 2" className="evidencia-img" />
                  <img src={factura3} alt="Factura 3" className="evidencia-img" />
                </div>

                <h5 className="mt-4 mb-3">Facturas Relacionadas</h5>
                <div className="table-responsive">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Número de Factura</th>
                        <th>Fecha</th>
                        <th>Monto</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>FAC-001</td>
                        <td>2024-02-15</td>
                        <td>$1,500.00</td>
                        <td>Pagada</td>
                        <td>
                          <button
                            className="btn btn-sm btn-primary"
                            onClick={() => setMostrarFactura(true)}
                          >
                            Ver Detalle
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>
            ) : (
              <div>
                <button 
                  className="btn btn-primary mb-3"
                  onClick={() => setMostrarFactura(false)}
                >
                  ← Volver a la lista de facturas
                </button>
                <FacturaTabla />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (vistaDetalle && proyectoActivo) {
    return (
      <div className="proyectos-container">
        {mostrarModal && <ModalAvance />}
        <div className="detalle-header">
          <button className="btn btn-primary mb-3" onClick={volverALista}>
            ← Volver a la lista
          </button>
          <h3 className="section-title">Detalle del Proyecto</h3>
        </div>
        <div className="detalle-content">
          <p><strong>ID Proyecto:</strong> {proyectoActivo.id}</p>
          <p><strong>Nombre:</strong> {proyectoActivo.nombre}</p>
          <p><strong>Descripción:</strong></p>
          <p>{proyectoActivo.descripcion}</p>
          <p><strong>Áreas Involucradas:</strong> {proyectoActivo.areas.join(", ")}</p>
          
          <p><strong>Progreso:</strong></p>
          <div className="progress mb-3">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: `${proyectoActivo.progreso}%` }}
            >
              {proyectoActivo.progreso}%
            </div>
          </div>

          <div className="avances-header">
            <h5>Avances del proyecto</h5>
            <button className="btn btn-success ms-3" onClick={abrirModal}>
              + Añadir
            </button>
          </div>

          <p className="mt-3"><strong>Costo total de avances:</strong> ${calcularCostoTotal(proyectoActivo.avances).toLocaleString()}</p>

          {proyectoActivo.avances?.length > 0 ? (
            <div className="list-group mt-3">
              {proyectoActivo.avances.map((avance, idx) => (
                <div key={idx} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <strong>ID: {avance.id}</strong> | Costo: ${avance.costo.toLocaleString()} | Fecha: {avance.fecha}
                    <p className="mb-0">{avance.descripcion.slice(0, 100)}...</p>
                  </div>
                  <button 
                    className="btn btn-sm btn-primary"
                    onClick={() => mostrarDetalleAvance(avance)}
                  >
                    Ver Detalle
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <p>No hay avances registrados.</p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="proyectos-container">
      <h3 className="section-title">Lista de Proyectos</h3>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID Proyecto</th>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Progreso</th>
              <th>Status</th>
              <th>Área</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {proyectosData.map((proyecto) => (
              <tr key={proyecto.id}>
                <td>{proyecto.id}</td>
                <td>{proyecto.nombre}</td>
                <td>{proyecto.descripcion.slice(0, 50)}...</td>
                <td>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${proyecto.progreso}%` }}
                    >
                      {proyecto.progreso}%
                    </div>
                  </div>
                </td>
                <td>{proyecto.status}</td>
                <td>{proyecto.areas.join(", ")}</td>
                <td>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => mostrarDetalle(proyecto)}
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

export default Proyectos;

