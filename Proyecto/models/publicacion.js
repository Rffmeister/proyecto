const mongoose = require("mongoose"); 

const publicacionSchema = new mongoose.Schema({
    nombre: String,
    edad: Number,
    comentario: String,
    likes: Number
});

const publicacion = mongoose.model("publicacion", publicacionSchema);

module.exports = publicacion  