import User from "../models/userModels"
import jwtServices from "../services/jwt-services"

export const store = async (req, res) =>{
    try{
        const content = await User.create(req.body)
        res.status(201).json(content)
    }catch(error){
        res.status(400).send(error)
    }
}

export const index = async (req, res) => {
    try{
        const content = await User.find(req.query).exec()
        res.json(content)
    }catch(error){
        res.status(400).send(error)
    }
}

export const show = async (req, res) => {
    try{
        const content = await User.findById(req.params.id).exec()
        res.json(content)
    }catch(error){
        res.status(400).send(error)
    }
}

export const update = async (req, res) => {
    try{
        const content = await User.findByIdAndUpdate(
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
        const content = await User.findByIdAndDelete(req.params.id).exec()
        res.json(content)
    }catch(error){
        res.status(400).send(error)
    }
}

export const signup = async (req, res) => {
    try {
        const user = await User.create({
            nome: req.body.nome,
            email: req.body.email,
            password: req.body.password,
            cep: req.body.cep,
            telefone: req.body.telefone,
            nascimento: req.body.nascimento,
            casa: req.body.casa
        })

        const token = jwtServices.generateAcessToken({
            tipo: user.tipo,
            email: user.email,
            _id: user._id
        })

        res.status(201).json({
            token
        })
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}

export const login = async (req,res) => {
    try{
        const user = await User.findOne({
            email: req.body.email
        }).exec()

        if(user && (await user.senhaCorreta(req.body.password))) {
            const token = jwtServices.generateAcessToken({
                tipo: user.tipo,
                email: user.email,
                _id: user._id
            })
            res.json({
                token
            })
        } else {
            res.status(404).json("Email ou senha inválidos")
        }
    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}