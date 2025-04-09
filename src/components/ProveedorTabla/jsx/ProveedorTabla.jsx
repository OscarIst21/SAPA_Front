import React, { useState } from 'react';
import { FaFilePdf, FaEye } from 'react-icons/fa';
import '../sstyless/ProveedorTabla.css';

const proveedoresData = [
  {
    id: 1,
    nombre: "Juan Pérez Rodríguez",
    rfc: "PERJ850315ABC",
    empresa: "Construcciones del Norte S.A.",
    padron: "documento1.pdf",
    registroCompranet: "compranet123.pdf",
    constanciaSat: "constancia_sat.pdf",
    satCumplimiento: "cumplimiento_sat.pdf",
    comprobanteDomicilio: "domicilio_2024.pdf",
    infonavit: "infonavit_constancia.pdf",
    imss: "imss_registro.pdf",
    constanciaNoSancion: "no_sancion.pdf",
    constanciaInhabilitacion: "inhabilitacion.pdf"
  },
  // Add more sample data...
];

const ProveedorTabla = () => {
  const [proveedorActivo, setProveedorActivo] = useState(null);
  const [documentoSeleccionado, setDocumentoSeleccionado] = useState(null);

  const mostrarDocumento = (documento) => {
    setDocumentoSeleccionado(documento);
    // Aquí iría la lógica para mostrar el PDF
  };

  const mostrarDetalleProveedor = (proveedor) => {
    setProveedorActivo(proveedor);
  };

  return (
    <div className="proveedor-container">
      <h3 className="section-title">Lista de Proveedores</h3>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>RFC</th>
              <th>Empresa</th>
              <th>Documentos</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {proveedoresData.map((proveedor) => (
              <tr key={proveedor.id}>
                <td>{proveedor.nombre}</td>
                <td>{proveedor.rfc}</td>
                <td>{proveedor.empresa}</td>
                <td>
                  <div className="documento-icons">
                    <FaFilePdf 
                      className="documento-icon" 
                      title="Padrón"
                      onClick={() => mostrarDocumento(proveedor.padron)}
                    />
                    <FaFilePdf 
                      className="documento-icon" 
                      title="Registro Compranet"
                      onClick={() => mostrarDocumento(proveedor.registroCompranet)}
                    />
                    <FaFilePdf 
                      className="documento-icon" 
                      title="Constancia SAT"
                      onClick={() => mostrarDocumento(proveedor.constanciaSat)}
                    />
                    {/* More document icons */}
                  </div>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => mostrarDetalleProveedor(proveedor)}
                  >
                    <FaEye /> Ver Detalle
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal para mostrar documentos */}
      {documentoSeleccionado && (
        <div className="modal">
          <div className="modal-content">
            <iframe
              src={documentoSeleccionado}
              title="Documento PDF"
              width="100%"
              height="500px"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProveedorTabla;