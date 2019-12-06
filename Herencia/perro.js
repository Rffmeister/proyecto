const {Mascota} = require("./herencia")

class Perro extends Mascota {
    constructor(raza, color, nombre){
        super(4, nombre)
        console.log("Se crea perro"); 
        this.raza = raza; 
        this.color = color; 
    }
    getRaza(){
        return this.raza; 
    }
}


module.exports = {
    Perro 
}