import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createTask(req, res) {
  const { title, description, projectId } = req.body;

  const task = await prisma.task.create({
    data: {
      title,
      description,
      projectId
    }
  });

  res.status(201).json(task);
}

export async function getTasks(req, res) {
  const { projectId } = req.query;

  const tasks = await prisma.task.findMany({
    where: { projectId }
  });

  res.json(tasks);
}