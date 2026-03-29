import { useState } from "react";
import { api } from "../services/api";
import "../App.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    try {
      const res = await api.post("/auth/login", {
        email,
        password
      });

      localStorage.setItem("token", res.data.token);
      window.location.href = "/dashboard";
    } catch (err) {
      console.error(err);
      alert("Erro ao logar");
    }
  }

  return (
    <div className="wrapper">
      <div className="left">
        🚀 Project Manager
      </div>

      <div className="right">
        <div className="container">
          <h2>Login</h2>

          <input
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={handleLogin}>Entrar</button>
        </div>
      </div>
    </div>
  );
}