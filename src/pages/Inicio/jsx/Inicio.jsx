import React from 'react';
import BarraLateral from '../../../components/BarraLateral/BarraLateral';
import BarraSuperior from '../../../components/BarraSuperior/jsx/BarraSuperior';
import FacturaTable from '../../../components/FacturaTabla/jsx/FacturaTabla';
const Inicio = () => {
  return (
    <div className="inicio-container">
      <BarraLateral />
      <div className="contenido">
        <BarraSuperior />
        <div className="area-contenido">
          { <FacturaTable/>}
        </div>
      </div>
    </div>
  );
};

export default Inicio;
