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

O projeto utiliza GitHub Actions para:

* Instalar dependências
* Gerar cliente Prisma
* Build da aplicação
* Build da imagem Docker

Pipeline executado automaticamente a cada push na branch `main`.

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

## 🚧 Melhorias Futuras

* Implementação de testes automatizados
* Criação de frontend (React)
* Logs estruturados e monitoramento
* Deploy automatizado completo
* Controle de permissões por perfil (admin/user)

---

## 👩‍💻 Autor

Desenvolvido por **Felipe Lima** como parte de atividade acadêmica, com foco em práticas modernas de desenvolvimento backend e DevOps.

---

## 📌 Conclusão

Este projeto demonstra a construção de uma API moderna e escalável, integrando:

* Backend estruturado
* Banco de dados gerenciado
* Containerização
* Pipeline de integração contínua

Atendendo aos requisitos propostos com foco em qualidade, segurança e boas práticas de mercado.

---
