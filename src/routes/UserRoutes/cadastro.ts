import express, {Request, Response} from "express";
import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt'

const Router = express.Router()
const prisma = new PrismaClient()


//Cadastro
Router.post("/", async (req: Request, res: Response) => {
    const user = req.body

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(user.password, salt)

    try{
    const response = await prisma.user.create({
        data: {
            name: user.name,
            email: user.email,
            password: hashedPassword
        }
    })
        res.status(201).json({message: `Usuário criado com sucesso!`, response})
    }
    catch(err){
        console.log(err)
        res.status(500).json({message: "Algo deu eerrado", err})
    }
})

export default Router
