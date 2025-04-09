import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaRocket, FaFileInvoice, FaCalendarAlt } from "react-icons/fa";
import logo from "../imagenes/logoPagina.png";
import "../styless/BarraLateral.css";

const BarraLateral = () => {
  const [seleccionado, setSeleccionado] = useState("Inicio");
  const navigate = useNavigate();

  const menuItems = [
    { nombre: "Inicio", icono: <FaHome />, color: "text-orange-500", ruta: "/inicio" },
    { nombre: "Programas", icono: <FaCalendarAlt />, color: "text-orange-500", ruta: "/inicio/programas" },
    { nombre: "Proyectos", icono: <FaRocket />, color: "text-orange-500", ruta: "/inicio/proyectos" },
    { nombre: "Facturas", icono: <FaFileInvoice />, color: "text-orange-500", ruta: "/inicio/Facturas" },
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
    </div>
  );
};

export default BarraLateral;
