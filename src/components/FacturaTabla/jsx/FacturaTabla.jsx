import React, { useState } from 'react';
import './FacturaTable.css';
import factura1 from '../imagenes/factura1.jpg';
import factura2 from '../imagenes/factura2.jpg';
import factura3 from '../imagenes/factura3.jpg';

const FacturaTabla = () => {
  const [mostrarProveedor, setMostrarProveedor] = useState(false);
  const [imagenModal, setImagenModal] = useState(null);

  const ImagenModal = ({ imagen, onClose }) => (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-imagen">
        <button className="modal-close-btn" onClick={onClose}>×</button>
        <img src={imagen} alt="Imagen ampliada" />
      </div>
    </div>
  );

  if (mostrarProveedor) {
    return (
      <div className="factura-table-container">
        <button 
          className=" btn2 "
          onClick={() => setMostrarProveedor(false)}
        >
          ← Volver a Factura
        </button>
        <table className="factura-table">
          <thead>
            <tr>
              <th colSpan="2">Detalle del Proveedor</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nombre</td>
              <td>Proveedor XYZ</td>
            </tr>
            <tr>
              <td>RFC</td>
              <td>PXYZ123456ABC</td>
            </tr>
            <tr>
              <td>Dirección</td>
              <td>Calle Principal #123</td>
            </tr>
            <tr>
              <td>Teléfono</td>
              <td>555-0123</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>contacto@proveedorxyz.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

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
            <td>
              <a 
                href="#" 
                className="link"
                onClick={(e) => {
                  e.preventDefault();
                  setMostrarProveedor(true);
                }}
              >
                Proveedor XYZ
              </a>
            </td>
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
            <td>Comprobante de pago</td>
            <td>
              <img 
                src={factura1} 
                alt="Comprobante de Pago" 
                className="evidencia-img" 
                onClick={() => setImagenModal(factura1)}
                style={{ cursor: 'pointer' }}
              />
            </td>
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
            <td>Cotizaciones</td>
            <td><a href="#" className="link">Ver cotizaciones</a></td>
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
              <div className="evidencias-container">
                <img 
                  src={factura1} 
                  alt="Evidencia 1" 
                  className="evidencia-img" 
                  onClick={() => setImagenModal(factura1)}
                  style={{ cursor: 'pointer' }}
                />
                <img 
                  src={factura2} 
                  alt="Evidencia 2" 
                  className="evidencia-img" 
                  onClick={() => setImagenModal(factura2)}
                  style={{ cursor: 'pointer' }}
                />
                <img 
                  src={factura3} 
                  alt="Evidencia 3" 
                  className="evidencia-img" 
                  onClick={() => setImagenModal(factura3)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      {imagenModal && <ImagenModal imagen={imagenModal} onClose={() => setImagenModal(null)} />}
    </div>
  );
};

export default FacturaTabla;
