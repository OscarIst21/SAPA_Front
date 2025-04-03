import { useState } from "react";
import { FaHome, FaRocket, FaFileInvoice, FaCog, FaSignOutAlt } from "react-icons/fa";
import logo from "../../assets/imagenes/logoPagina.png";
import "./BarraLateral.css";

const BarraLateral = () => {
  const [seleccionado, setSeleccionado] = useState("Inicio");

  const menuItems = [
    { nombre: "Inicio", icono: <FaHome />, color: "text-orange-500" },
    { nombre: "Proyectos", icono: <FaRocket />, color: "text-black" },
    { nombre: "Facturas", icono: <FaFileInvoice />, color: "text-black" },
  ];

  const menuInferior = [
    { nombre: "Configurar", icono: <FaCog />, color: "text-black" },
    { nombre: "Cerrar sesión", icono: <FaSignOutAlt />, color: "text-red-500" }
  ];

  return (
    <div className="barra-lateral">
      {/* Logo */}
      <img src={logo} alt="Logo de la página" className="logo" />

      {/* Menú principal */}
      <nav className="menu">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`boton ${seleccionado === item.nombre ? "boton-seleccionado" : ""}`}
            onClick={() => setSeleccionado(item.nombre)}
          >
            <span className={`icono ${seleccionado === item.nombre ? item.color : "text-gray-600"}`}>
              {item.icono}
            </span>
            <span className={`texto ${seleccionado === item.nombre ? "text-orange-500" : "text-gray-700"}`}>
              {item.nombre}
            </span>
          </button>
        ))}
      </nav>

      {/* Menú inferior (Configuración y Cerrar sesión) */}
      <div className="menu-inferior">
        {menuInferior.map((item, index) => (
          <button
            key={index}
            className={`boton ${seleccionado === item.nombre ? "boton-seleccionado" : ""}`}
            onClick={() => setSeleccionado(item.nombre)}
          >
            <span className={`icono ${seleccionado === item.nombre ? item.color : "text-gray-600"}`}>
              {item.icono}
            </span>
            <span className={`texto ${seleccionado === item.nombre ? "text-orange-500" : "text-gray-700"}`}>
              {item.nombre}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default BarraLateral;
