import db from "../config/db"

const filmeSchema = new db.Schema({
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

const Filme = db.model("Filme", filmeSchema)

export default Filme