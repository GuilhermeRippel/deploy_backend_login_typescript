import express, {Request, Response} from 'express'
import { PrismaClient } from '@prisma/client'

const Router = express.Router()
const prisma = new PrismaClient()

Router.delete("/:id", async (req: Request, res: Response) => {
    const id: number = parseInt(req.params.id)


    try{
        const findUser = await prisma.user.findUnique({
            where: {
                id: id
            }
        })

        if(!findUser){
            res.status(404).json("Usuário não encontrado")
            return
        }

        const userDelete = await prisma.user.delete({
            where: {
                id: findUser?.id
            }
        })

        res.status(200).json({message: "Usuário deletado", userDelete})
    }
    catch(err){
        res.status(500).json({message: "Erro ao deletar usuário", err})
    }
} )

export default Router