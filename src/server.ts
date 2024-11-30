import express from 'express'
import userRoutes from './routes/UserRoutes'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

app.use("/user", userRoutes)


const PORT: number = 3000
app.listen(PORT, () => console.log(`Rodando o express na porta ${PORT}`))