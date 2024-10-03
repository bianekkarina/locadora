import Filme from "../models/filmeModels.js"

export const store = async (req, res) =>{
    try{
        const content = await Filme.create(req.body)
        res.status(201).json(content)
    }catch(error){
        res.status(400).send(error)
    }
}

export const index = async (req, res) => {
    try{
        const content = await Filme.find(req.query).exec()
        res.json(content)
    }catch(error){
        res.status(400).send(error)
    }
}

export const show = async (req, res) => {
    try{
        const content = await Filme.findById(req.params.id).exec()
        res.json(content)
    }catch(error){
        res.status(400).send(error)
    }
}

export const update = async (req, res) => {
    try{
        const content = await Filme.findByIdAndUpdate(
            req.params.id, 
            req.body
        ).exec()
        res.json(content)
    }catch(error){
        res.status(400).send(error)
    }
}

export const destroy = async (req, res) => {
    try{
        const content = await Filme.findByIdAndDelete(req.params.id).exec()
        res.json(content)
    }catch(error){
        res.status(400).send(error)
    }
}
