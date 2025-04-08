import { Routes, Route, Navigate } from "react-router-dom";
import Inicio from "./pages/Inicio/jsx/Inicio";
import Login from "./pages/login.jsx";  // Fixed capitalization

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/inicio/*" element={<Inicio />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
