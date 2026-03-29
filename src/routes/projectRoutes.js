import { Router } from "express";
import { createProject, getProjects } from "../controllers/projectController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

router.use(authMiddleware);

/**
 * @swagger
 * /projects:
 *   post:
 *     summary: Criar projeto
 *     tags: [Projects]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Projeto criado
 */
router.post("/", createProject);

/**
 * @swagger
 * /projects:
 *   get:
 *     summary: Listar projetos
 *     tags: [Projects]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de projetos
 */
router.get("/", getProjects);

export default router;