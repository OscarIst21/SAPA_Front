import { Routes, Route, Navigate } from "react-router-dom";
import Inicio from "./pages/Inicio/jsx/Inicio";

export default function App() {
  return (
    <Routes>
      {/* Redirige cualquier ruta a /inicio */}
      <Route path="/" element={<Navigate to="/inicio" replace />} />
      <Route path="/inicio" element={<Inicio />} />
      {/* Si intentan ir a otra ruta, los manda a /inicio */}
      <Route path="*" element={<Navigate to="/inicio" replace />} />
    </Routes>
  );
}
