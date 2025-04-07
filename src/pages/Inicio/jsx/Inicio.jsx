import React from 'react';
import BarraLateral from '../../../components/BarraLateral/BarraLateral';
import BarraSuperior from '../../../components/BarraSuperior/jsx/BarraSuperior';
import FacturaTable from '../../../components/FacturaTabla/jsx/FacturaTabla';
import "../styles/styles.css";
import Dashboard from '../../../components/Dashboard/jsx/Dashboard';
import Proyectos from '../../../components/Proyectos/jsx/Proyectos';
const Inicio = () => {
  return (
    <div className='inicio-container'>
      <BarraLateral />

      <div className='contenido'>
        <BarraSuperior />

        <div className="area-contenido">
          <Proyectos />
        </div>
      </div>
    </div>
  );
};

export default Inicio;