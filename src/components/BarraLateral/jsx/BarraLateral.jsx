import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaRocket, FaFileInvoice, FaCog, FaSignOutAlt } from "react-icons/fa";
import logo from "../imagenes/logoPagina.png";
import "../styless/BarraLateral.css";

const BarraLateral = () => {
  const [seleccionado, setSeleccionado] = useState("Inicio");
  const navigate = useNavigate();

  const menuItems = [
    { nombre: "Inicio", icono: <FaHome />, color: "text-orange-500", ruta: "/inicio" },
    { nombre: "Proyectos", icono: <FaRocket />, color: "text-orange-500", ruta: "/inicio/proyectos" },
    { nombre: "Facturas", icono: <FaFileInvoice />, color: "text-orange-500", ruta: "/inicio/facturaTabla" },
  ];

  const menuInferior = [
    { nombre: "Configurar", icono: <FaCog />, color: "text-orange-500", ruta: "/inicio/configuracion" },
    { nombre: "Cerrar sesión", icono: <FaSignOutAlt />, color: "text-red-500", ruta: "/login" }
  ];

  const handleNavigation = (item) => {
    setSeleccionado(item.nombre);
    navigate(item.ruta);
  };

  return (
    <div className="barra-lateral">
      <img src={logo} alt="Logo de la página" className="logo" />

      <nav className="menu">
        {menuItems.map((item, index) => (
          <button
            key={index}
            className={`boton ${seleccionado === item.nombre ? "boton-seleccionado" : ""}`}
            onClick={() => handleNavigation(item)}
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

      <div className="menu-inferior">
        {menuInferior.map((item, index) => (
          <button
            key={index}
            className={`boton ${seleccionado === item.nombre ? "boton-seleccionado" : ""}`}
            onClick={() => handleNavigation(item)}
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
