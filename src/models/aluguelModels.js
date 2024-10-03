import mongoose from "mongoose"
import db from "../config/db.js"

const aluguelSchema = new mongoose.Schema({
    alugadoPor:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true,
    },
    filmeAlugado:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Filme',
        required: true,
    },
    dataAluguel:{
        type:Date,
        required: true,
    },
    dataRetorno:{
        type:Date,
        required: true,
    }
})

const Aluguel = mongoose.model("Aluguel", aluguelSchema)

export default Aluguel