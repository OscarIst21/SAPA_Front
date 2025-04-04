import React from 'react';
import BarraLateral from '../../../components/BarraLateral/BarraLateral';
import BarraSuperior from '../../../components/BarraSuperior/jsx/BarraSuperior';
import FacturaTable from '../../../components/FacturaTabla/jsx/FacturaTabla';
import "../styles/styles.css";
import Dashboard from '../../../components/Dashboard/jsx/Dashboard';
const Inicio = () => {
  return (
    <div className='inicio-container'>
      <BarraLateral />

      <div className='contenido'>
        <BarraSuperior />

        <div className="area-contenido">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default Inicio;