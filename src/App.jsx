import { Routes, Route, Navigate } from "react-router-dom";
import Inicio from "./pages/Inicio/jsx/Inicio";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/inicio" replace />} />
      <Route path="/inicio/*" element={<Inicio />} />
      <Route path="*" element={<Navigate to="/inicio" replace />} />
    </Routes>
  );
}
