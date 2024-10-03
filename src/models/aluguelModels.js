import db from "../config/db"

const aluguelSchema = new db.Schema({
    alugadoPor:{
        type: db.Schema.Types.ObjectId,
        ref:'User',
        required: true,
    },
    filmeAlugado:{
        type:db.Schema.Types.ObjectId,
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

const Aluguel = db.model("Aluguel", aluguelSchema)

export default Aluguel