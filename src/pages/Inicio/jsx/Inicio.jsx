import React from 'react';
import BarraLateral from '../../../components/BarraLateral/BarraLateral';
import BarraSuperior from '../../../components/BarraSuperior/jsx/BarraSuperior';

const Inicio = () => {
  return (
    <div className="inicio-container">
      <BarraLateral />
      <div className="contenido">
        <BarraSuperior />
        <div className="area-contenido">
          { <h1>Hola</h1>}
        </div>
      </div>
    </div>
  );
};

export default Inicio;
