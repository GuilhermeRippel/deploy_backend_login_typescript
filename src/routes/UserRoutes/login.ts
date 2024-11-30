import express, { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const loginRouter = express.Router();
const prisma = new PrismaClient();

loginRouter.post("/", async (req: Request, res: Response) => {
  const { email, password } = req.body;  

  try {
    const findUser = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!findUser) {
      res.status(401).json({ message: "Credenciais incorretas" });
      return
    }

    const isPasswordValid = await bcrypt.compare(password, findUser.password);

    if (!isPasswordValid) {
      res.status(401).json({ message: "Credenciais incorretas" });
      return
    }

    res.status(200).json({ message: "Usuário encontrado, bem-vindo!" });
  } catch (err) {
    res.status(500).json({ message: "Não foi possível logar", error: err });
  }
});

export default loginRouter;
