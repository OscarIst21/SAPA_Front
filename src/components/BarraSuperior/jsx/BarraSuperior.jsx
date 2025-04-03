import React from "react";
import { Link } from "react-router-dom";
import { FaBell } from "react-icons/fa";
import "./BarraSuperior.css";

const BarraSuperior = () => {
  return (
    <nav className="barra-superior">
      <h2 className="titulo">Resumen del programa anual</h2>

      {/* Contenido a la derecha */}
      <div className="derecha">
        {/* Notificaciones */}
        <button className="notificaciones">
          <FaBell className="icono-notificacion" />
          <span className="badge">3</span>
        </button>

        {/* Usuario */}
        <div className="usuario">
          <button className="boton-usuario">
            <img
              src="https://ui-avatars.com/api/?name=Admin+User&background=random"
              alt="Usuario"
              className="avatar"
            />
            <span className="nombre-usuario">Admin User</span>
          </button>

          {/* Menú desplegable */}
          <div className="menu-usuario">
            <p className="area">Área: XXX</p>
            <hr />
            <Link className="opcion-menu" to="/perfil">Perfil</Link>
            <Link className="opcion-menu" to="/configuracion">Configuración</Link>
            <hr />
            <Link className="opcion-menu cerrar-sesion" to="/logout">Cerrar sesión</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default BarraSuperior;
