import jwt from "jsonwebtoken"

const generateAcessToken = (user) => 
    jwt.sign(user,process.env.JWT_TOKEN_SECRET, {expiresIn:"1d"})

const verifyAcessToken = (token) => 
    jwt.verify(token, process.env.JWT_TOKEN_SECRET)

export default {
    generateAcessToken,
    verifyAcessToken
}