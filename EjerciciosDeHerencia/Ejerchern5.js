class Construccion {
    constructor(puertas, ventanas, pisos, direccion, altura, largo, ancho){
        this.puertas = puertas;
        this.ventanas = ventanas;
        this.pisos = pisos;
        this.direccion = direccion;
        this.altura = altura;
        this.largo = largo;
        this.ancho = ancho;
    }

    getDireccion(){
        return this.direccion;
    }

    setDireccion(direccion){
        this.direccion = direccion;
    }

    getMetrosCuadrados(){
        return this.ancho * this.altura; 
    }
}

class Edificio extends Construccion {
    constructor(puertas, ventanas, pisos, direccion, altura, largo, ancho) {
        super(puertas, ventanas, pisos, direccion, altura, largo, ancho);
    }
}

class Casa extends Construccion {
    constructor(puertas, ventanas, pisos, direccion, altura, largo, ancho) {
        super(puertas, ventanas, pisos, direccion, altura, largo, ancho);
    }
}

