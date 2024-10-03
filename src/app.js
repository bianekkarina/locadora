import express from "express"
import "dotenv/config"
import connectDB from "./config/db.js"
import userRoutes from "./routes/userRoutes.js"
import filmeRoutes from "./routes/filmeRoutes.js"
import aluguelRoutes from "./routes/aluguelRoutes.js"
import { configDotenv } from "dotenv"

configDotenv()
connectDB()

const app = express()
app.use(express.json())

app.use("/api", userRoutes)
app.use("/api", filmeRoutes)
app.use("/api", aluguelRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))


