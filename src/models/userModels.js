import mongoose from "mongoose";
import db from "../config/db.js"
import bcrypt from "bcryptjs"

const userSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        unique: true,
        validate: {
          validator: function (v) {
            return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
          },
          required: true,
        },
      },
      password: {
        type: String,
        required: true,
        minLength: 5,
      },
      tipo: {
        type: String,
        enum: ["ADM", "USU"],
        required: true,
        default: "REC",
      },
      cep:{
        type:Object,
        minLength: 8,
        maxLength: 8
      },
      telefone:{
        type: Array,
        required: true,
      },
      nascimento:{
        type: Date,
        required: true,
      },
      casa:{
        type: String,
        required: true,
      }
      })


userSchema.pre("save", async function(){
  this.password = await bcrypt.hash(this.password, 10)
})

userSchema.methods.senhaCorreta = async function(senha){
  return await bcrypt.compare(senha,this.password)
}

const User = mongoose.model("User", userSchema)


export default User