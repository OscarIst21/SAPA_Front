import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../styles/styles.css';
import BarraSuperior from '../../../components/BarraSuperior/jsx/BarraSuperior';
import BarraLateral from '../../../components/BarraLateral/BarraLateral';
import Dashboard from '../../../components/Dashboard/jsx/Dashboard';
import Proyectos from '../../../components/Proyectos/jsx/Proyectos';

const Inicio = () => {
  return (
    <div className="inicio-container">
      <BarraLateral />
      <div className="contenido">
        <BarraSuperior />
        <div className="area-contenido">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="proyectos" element={<Proyectos />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Inicio;