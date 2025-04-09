import { Routes, Route } from "react-router-dom";
import InicioPage from "./pages/Inicio/jsx/Inicio";
import Proyectos from "./components/Proyectos/jsx/Proyectos";
import Programas from "./components/Programas/jsx/Programas";
import Facturas from "./components/Facturas/Facturas";

function App() {
  return (
    <Routes>
      <Route path="inicio" element={<InicioPage />}>
        <Route path="proyectos" element={<Proyectos />} />
        <Route path="programas" element={<Programas />} />
        <Route path="facturas" element={<Facturas />} />
      </Route>
    </Routes>
  );
}

export default App;
