# 🚀 Project Manager API

API RESTful para gerenciamento de projetos e tarefas, desenvolvida com Node.js, arquitetura em camadas, autenticação JWT e preparada para execução em ambientes cloud com Docker e CI/CD.

---

## 📌 Visão Geral

O **Project Manager API** é um sistema backend que permite:

* Cadastro e autenticação de usuários
* Criação e gerenciamento de projetos
* Criação e acompanhamento de tarefas vinculadas a projetos
* Controle de acesso via autenticação JWT
* Documentação interativa com Swagger

O projeto foi desenvolvido seguindo boas práticas de engenharia de software, com foco em **escalabilidade, segurança e observabilidade**.

---

## 🧱 Arquitetura

A aplicação segue uma arquitetura em camadas:

```
src/
 ├── controllers/   → Regras de negócio
 ├── routes/        → Definição das rotas
 ├── middlewares/   → Autenticação e validações
 ├── prisma/        → Configuração do banco de dados
 ├── app.js         → Configuração da aplicação
 └── server.js      → Inicialização do servidor
```

---

## 🛠️ Tecnologias Utilizadas

### Backend

* Node.js
* Express
* Prisma ORM
* PostgreSQL

## Frontend

Aplicação desenvolvida em React utilizando Vite, responsável pela interface do usuário.

- React
- Vite
- Axios
- React Router

## ☁️ Arquitetura em Nuvem

O sistema segue arquitetura distribuída:

Frontend (Vercel)  
↓  
Backend API (Node.js + Docker - Render)  
↓  
Banco de Dados (Supabase - PostgreSQL)

### Descrição

- Frontend hospedado na Vercel
- Backend containerizado rodando no Render
- Banco gerenciado fora do container (Supabase)

### Funcionalidades

- Tela de login
- Dashboard de projetos
- Integração com API

### Segurança

* JWT (JSON Web Token)
* Bcrypt (hash de senha)

### Documentação

* Swagger (OpenAPI)

### DevOps

* Docker
* GitHub Actions (CI/CD)

---

## 🔐 Funcionalidades

### 👤 Autenticação

* Registro de usuário
* Login com geração de token JWT

### 📁 Projetos

* Criar projeto
* Listar projetos do usuário autenticado

### ✅ Tarefas

* Criar tarefas vinculadas a projetos
* Listar tarefas

---

## 📄 Documentação da API

A API possui documentação interativa via Swagger:

```
http://localhost:3000/docs
```

Permite:

* Testar endpoints
* Visualizar requisições e respostas
* Autenticar via token JWT

---

## ⚙️ Como Executar o Projeto

### 🔧 Pré-requisitos

* Node.js instalado
* PostgreSQL disponível
* Docker (opcional)

---

### ▶️ Rodando localmente

```bash
# instalar dependências
npm install

# rodar migrations
npx prisma migrate dev

# iniciar servidor
npm run dev
```

---

### 🌐 Acessar aplicação

* API: http://localhost:3000
* Swagger: http://localhost:3000/docs

---

## 🔑 Autenticação

Para acessar rotas protegidas:

1. Faça login em `/auth/login`
2. Copie o token retornado
3. Clique em **Authorize** no Swagger
4. Use:

```
Bearer SEU_TOKEN
```

---

## 🐳 Docker

### Build da imagem

```bash
docker build -t project-manager-api .
```

### Rodar container

```bash
docker run -p 3000:3000 project-manager-api
```

---

## 🔄 CI/CD

Pipeline executado automaticamente a cada push na branch `main`, incluindo:

- Instalação de dependências
- Build da aplicação
- Execução de testes automatizados
- Validação do código

---

## 🔒 Boas Práticas Implementadas

* Uso de variáveis de ambiente
* Senhas criptografadas com bcrypt
* Rotas protegidas com JWT
* Separação de responsabilidades (camadas)
* Tratamento de erros
* Banco de dados externo (persistência fora do container)

---

## 📊 Banco de Dados

Modelos principais:

* **User**
* **Project**
* **Task**

Relacionamentos:

* Usuário possui vários projetos
* Projeto possui várias tarefas

---

## 📈 Observabilidade

- Logs com Morgan
- Tratamento de erros centralizado

---

## 🧪 Testes
Testes básicos de API com Jest/Supertest
Validação de endpoints principais

---

## 👩‍💻 Autor

Desenvolvido por **Felipe Lima** como parte de atividade acadêmica, com foco em práticas modernas de desenvolvimento backend e DevOps.

---

## 🌐 Deploy

Frontend: [(link Vercel)](https://project-manager-api-mocha.vercel.app/)
Backend: [(link Render)](https://project-manager-api-f1c4.onrender.com)
API Docs: [(link Swagger)](https://project-manager-api-f1c4.onrender.com/docs)

## 📌 Conclusão

Este projeto demonstra a construção de uma API moderna e escalável, integrando:

* Backend estruturado
* Banco de dados gerenciado
* Containerização
* Pipeline de integração contínua
* Deploy em cloud

Atendendo aos requisitos propostos com foco em qualidade, segurança e boas práticas de mercado.

---
