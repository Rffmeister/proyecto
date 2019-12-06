const mongoose = require("mongoose");

const PeliculasSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    }, 
    genero:{
        type:String,
        enum: ["DRAMA", "ACCION", "COMEDIA"]
    },
    director:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "director"
    },
});


const Peliculas = mongoose.model("Pelicula", PeliculasSchema);

module.exports = Peliculas;