import express from "express"
import "dotenv/config"
import connectDB from "./config/db"
import userRoutes from "./routes/userRoutes"
import filmeRoutes from "./routes/filmeRoutes"
import aluguelRoutes from "./routes/aluguelRoutes"

configDotenv.config()
connectDB()

const app = express()
app.use(express.json())

app.use("/api", userRoutes)
app.use("/api", filmeRoutes)
app.use("/api", aluguelRoutes)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))


