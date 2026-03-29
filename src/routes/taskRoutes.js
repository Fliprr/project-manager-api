import { Router } from "express";
import { createTask, getTasks } from "../controllers/taskController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const router = Router();

router.use(authMiddleware);

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: Criar task
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               projectId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Task criada
 */
router.post("/", createTask);

/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: Listar tasks
 *     tags: [Tasks]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de tasks
 */
router.get("/", getTasks);

export default router;