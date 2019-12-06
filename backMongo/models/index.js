const mongoose = require("mongoose");
const Director = require("./Director");
const Peliculas = require("./Peliculas");
 

const URL = "mongodb+srv://admin:qwerty123@cluster0-v3lul.mongodb.net/test?retryWrites=true"
mongoose.connect(URL, (err) => {
    if (!err) console.log("Conexion existosa");
    else console.log(err); 
});


module.exports = {
    Director,
    Peliculas
}
