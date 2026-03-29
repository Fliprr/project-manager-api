import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Project Manager API",
      version: "1.0.0",
      description: "API para gerenciamento de projetos e tarefas"
    },
    servers: [
      {
        url: "http://localhost:3000"
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    },
    security: [
      {
        bearerAuth: []
      }
    ]
  },
  apis: ["./src/routes/*.js"]
};

export const swaggerSpec = swaggerJSDoc(options);