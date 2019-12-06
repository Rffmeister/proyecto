const {Electrodomestico} = require("./Ejerherencia1")

class Licuadora extends Electrodomestico {
    constructor(Precio, color, consumoEnergetico,capacidad) {
        super(100, Electrodomestico)
        this.Precio = Precio; 
        this.color = color; 
        this.capacidad = capacidad, 
        this.consumoEnergetico = consumoEnergetico; 
        console.log("Se crea licuadora")
    }
    getNombre(){
        return this.Precio
    }
   
}

module.exports = {
    Licuadora
}