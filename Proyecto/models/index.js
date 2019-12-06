const mongoose = require("mongoose"); 
const publicacion = require("./publicacion"); 
const usuarios = require("./usuarios");

const URL = "mongodb+srv://admin:qwerty123@cluster0-v3lul.mongodb.net/test?retryWrites=true&w=majority"
mongoose.connect(URL, (err) => {
    if(!err) console.log("Conexion exitosa");
    else console.log(err);
}); 


module.exports = {
    publicacion,
    usuarios
}