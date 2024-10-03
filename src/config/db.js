import mongoose from 'mongoose'

const connectDB = async() => {
    try{
        await mongoose.connect('mongodb://localhost:27017/locadora')
        console.log("MongoDB conectado com sucesso.")
    } catch(error){
        console.error("Erro ao conectar ao mongodb:", error)
    }
}
connectDB()

export default connectDB