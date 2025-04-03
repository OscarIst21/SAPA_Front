import React from 'react';
import './FacturaTable.css';

const FacturaTable = () => {
  return (
    <div className="factura-table-container">
      <table className="factura-table">
        <thead>
          <tr>
            <th colSpan="2">Detalle de Factura</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Gasto</td>
            <td>Ejemplo Gasto</td>
          </tr>
          <tr>
            <td>Factura</td>
            <td>#FCT-00123</td>
          </tr>
          <tr>
            <td>Proveedor</td>
            <td>Proveedor XYZ</td>
          </tr>
          <tr>
            <td>Área</td>
            <td>Área de Operaciones</td>
          </tr>
          <tr>
            <td>Usuario que da de alta la factura</td>
            <td>usuario@mail.com</td>
          </tr>
          <tr>
            <td>Enlace a factura en PDF</td>
            <td><a href="#" className="link">Ver Factura PDF</a></td>
          </tr>
          <tr>
            <td>Comprobante de pago (imagen)</td>
            <td>Comprobante de Pago</td>
          </tr>
          <tr>
            <td>Requisición</td>
            <td><a href="#" className="link">Ver Requisición</a></td>
          </tr>
          <tr>
            <td>Recibí</td>
            <td>Nombre de quien recibí</td>
          </tr>
          <tr>
            <td>Cotizador</td>
            <td><a href="#" className="link">Ver Cotizador</a></td>
          </tr>
          <tr>
            <td>Cantidad pagada</td>
            <td>$1,500.00</td>
          </tr>
          <tr>
            <td>Fecha de pago</td>
            <td>2023-10-05</td>
          </tr>
          <tr>
            <td>Fecha de comprobante</td>
            <td>2023-10-06</td>
          </tr>
          <tr>
            <td>Fecha de entrega</td>
            <td>2023-10-10</td>
          </tr>
          <tr>
            <td>Evidencias de Compra</td>
            <td>
              <span className="evidencia">Evidencia 1</span>
              <span className="evidencia">Evidencia 2</span>
              <span className="evidencia">Evidencia 3</span>
            </td>
          </tr>
        </tbody>
      </table>
      <button className="factura-table-button">Volver</button>
    </div>
  );
};

export default FacturaTable;
