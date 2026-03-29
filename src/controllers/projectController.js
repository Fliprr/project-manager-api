import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createProject(req, res) {
  const { name, description } = req.body;

  const project = await prisma.project.create({
    data: {
      name,
      description,
      ownerId: req.user.id
    }
  });

  res.status(201).json(project);
}

export async function getProjects(req, res) {
  const projects = await prisma.project.findMany({
    where: { ownerId: req.user.id }
  });

  res.json(projects);
}