const mongoose = require("mongoose"); 

const usuariosSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    bio: {
        type: String,
        default: "No-bio"
    },
    sexo: {
        type: String,
        enum:["M","F","SN"],
    },
});

const usuarios = mongoose.model("usuarios", usuariosSchema);

module.exports = usuarios 
