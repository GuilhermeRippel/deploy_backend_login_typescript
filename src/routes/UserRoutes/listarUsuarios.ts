import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const Router = express.Router();
const prisma = new PrismaClient();

Router.get("/", async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    console.log("usuarios", users)

    res.status(200).json(users);
  } 
  catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Erro ao listar usuários",
      error: err,
    });
  }
});

export default Router;
