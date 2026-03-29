import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* rota login */}
        <Route path="/" element={<Login />} />

        {/* rota dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* fallback (evita tela branca em rota errada) */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}