import { useEffect, useState } from "react";
import { api } from "../services/api";
import "../App.css";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [name, setName] = useState("");

  const token = localStorage.getItem("token");

  async function loadProjects() {
    const res = await api.get("/projects", {
      headers: { Authorization: `Bearer ${token}` }
    });

    setProjects(res.data);
  }

  async function createProject() {
    if (!name) return alert("Digite um nome");

    await api.post(
      "/projects",
      { name },
      {
        headers: { Authorization: `Bearer ${token}` }
      }
    );

    setName("");
    loadProjects();
  }

  useEffect(() => {
    loadProjects();
  }, []);

  return (
    <div className="container">
      <h2>📁 Meus Projetos</h2>

      <input
        placeholder="Nome do projeto"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <button onClick={createProject}>Criar Projeto</button>

      {projects.map(p => (
        <div className="card" key={p.id}>
          {p.name}
        </div>
      ))}
    </div>
  );
}