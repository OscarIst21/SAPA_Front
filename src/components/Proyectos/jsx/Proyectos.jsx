import React, { useState } from "react";
import "../styless/Proyectos.css";
import { Modal, Button } from "react-bootstrap";

const proyectosData = [
  {
    id: "proj001",
    nombre: "Implementación de ERP",
    descripcion: "Proyecto para implementar un sistema ERP en la empresa.",
    progreso: 70,
    status: "Activo",
    areas: ["Finanzas", "Operaciones"],
    facturas: [
      { numero: "F001", monto: 1500, estado: "Pagada" },
      { numero: "F002", monto: 2300, estado: "Pendiente" },
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
  const [mostrarModal, setMostrarModal] = useState(false);

  const abrirModal = (proyecto) => {
    setProyectoActivo(proyecto);
    setMostrarModal(true);
  };

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
                    onClick={() => abrirModal(proyecto)}
                  >
                    Ver Detalle
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      <Modal
        show={mostrarModal}
        onHide={() => setMostrarModal(false)}
        size="lg"
      >
        <Modal.Header closeButton className=" text-white ">
          <Modal.Title>Detalle del Proyecto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {proyectoActivo && (
            <>
              <p>
                <strong>ID Proyecto:</strong> {proyectoActivo.id}
              </p>
              <p>
                <strong>Nombre:</strong> {proyectoActivo.nombre}
              </p>
              <p>
                <strong>Descripción:</strong>
              </p>
              <p>{proyectoActivo.descripcion}</p>
              <p>
                <strong>Áreas Involucradas:</strong>{" "}
                {proyectoActivo.areas.join(", ")}
              </p>
              <p>
                <strong>Progreso:</strong>
              </p>
              <div className="progress mb-3">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: `${proyectoActivo.progreso}%` }}
                >
                  {proyectoActivo.progreso}%
                </div>
              </div>
              <h5>Facturas Asociadas</h5>
              {proyectoActivo.facturas.length > 0 ? (
                <ul className="list-group">
                  {proyectoActivo.facturas.map((factura, idx) => (
                    <li key={idx} className="list-group-item">
                      Factura: {factura.numero} | Monto: ${factura.monto} | Estado:{" "}
                      {factura.estado}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No hay facturas asociadas.</p>
              )}
            </>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setMostrarModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Proyectos;
