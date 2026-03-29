import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { z } from "zod";
import morgan from "morgan";

import userRoutes from "./routes/userRoutes.js";
import projectRoutes from "./routes/projectRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger.js";

dotenv.config();

const app = express();
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6)
});

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/auth", userRoutes);
app.use("/projects", projectRoutes);
app.use("/tasks", taskRoutes);

// Swagger
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.send("API rodando 🚀");
});

export default app;