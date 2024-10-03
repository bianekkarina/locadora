import mongoose from "mongoose"
import db from "../config/db.js"

const filmeSchema = new mongoose.Schema({
    nome:{ 
    type: String,
    required: true,
    },
    lancamento:{
        type: Date,
        required:true,
    },
    diretor:{
        type: String,
        required: false,
    },
    classificacao:{
        type: String,
        enum:["livre", "maior16", "maior18"],
        required: true,
    }
})

const Filme = mongoose.model("Filme", filmeSchema)

export default Filme