import Aluguel from "../models/aluguelModels.js"

export const store = async (req, res) =>{
    try{
        const content = await Aluguel.create(req.body)
        res.status(201).json(content)
    } catch(error) {
        res.status(400).send(error)
    }
}

export const index = async (req, res) => {
    try{
        const content = await Aluguel.find(req.query).exec()
        res.json(content)
    } catch(error) {
        res.status(400).send(error)
    }
}

export const show = async (req, res) => {
    try{
        const content = await Aluguel.findById(req.params.id).exec()
        res.json(content)
    } catch(error) {
        res.status(400).send(error)
    }
}

export const showComplete = async (req, res) => {
    console.log(req.params.id)
    try {
        const content = await Aluguel.findById(req.params.id)
        .populate("filme_id")
        .populate("user_id")
        .exec()
        res.json(content)
    } catch (error) {
        res.status(400).send(error)
    }
}

export const update = async (req, res) => {
    try{
        const content = await Aluguel.findByIdAndUpdate(
            req.params.id, 
            req.body
        ).exec()
        res.json(content)
    } catch(error) {
        res.status(400).send(error)
    }
}

export const destroy = async (req, res) => {
    try{
        const content = await Aluguel.findByIdAndDelete(req.params.id).exec()
        res.json(content)
    } catch(error) {
        res.status(400).send(error)
    }
}
