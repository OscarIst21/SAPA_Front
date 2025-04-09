import React, { useState } from 'react';
import './Facturas.css';
import FacturaTabla from '../FacturaTabla/jsx/FacturaTabla';

const facturasData = [
  {
    id: 'FAC-001',
    fecha: '2024-02-15',
    monto: 1500.00,
    estado: 'Pagada',
  },
  {
    id: 'FAC-002',
    fecha: '2024-02-20',
    monto: 2300.00,
    estado: 'Pendiente',
  },
  {
    id: 'FAC-003',
    fecha: '2024-02-25',
    monto: 1800.00,
    estado: 'Pagada',
  },
];

const Facturas = () => {
  const [mostrarDetalle, setMostrarDetalle] = useState(false);
  const [facturaSeleccionada, setFacturaSeleccionada] = useState(null);

  const verDetalle = (factura) => {
    setFacturaSeleccionada(factura);
    setMostrarDetalle(true);
  };

  if (mostrarDetalle) {
    return (
      <div>
        <button 
          className="btn btn-primary mb-3"
          onClick={() => setMostrarDetalle(false)}
        >
          ← Volver a la lista de facturas
        </button>
        <FacturaTabla />
      </div>
    );
  }

  return (
    <div className="facturas-container">
      <h3 className="section-title mb-4">Facturas</h3>
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
            {facturasData.map((factura) => (
              <tr key={factura.id}>
                <td>{factura.id}</td>
                <td>{factura.fecha}</td>
                <td>${factura.monto.toLocaleString()}</td>
                <td>
                  <span className={`estado-badge ${factura.estado.toLowerCase()}`}>
                    {factura.estado}
                  </span>
                </td>
                <td>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => verDetalle(factura)}
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

export default Facturas;