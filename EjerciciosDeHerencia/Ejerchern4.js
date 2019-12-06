class Maestro {
    constructor(materia, calificaciones){
        this.materia = materia;
        this.calificaciones = calificaciones;
    }

    calcularPromedio(){

        let sumaTotal = 0;

        for(let i=0; i<this.calificaciones.length; i++){
            sumaTotal += this.calificaciones[i];
        }

        return (sumaTotal/this.calificaciones.length);
    }
}

class MaestroDeFisica extends Maestro {
    constructor(materia, calificaciones, antiguedad){
        super(materia, calificaciones);
        this.antiguedad = antiguedad;
    }
}

class MaestroDeMusica extends Maestro {
    constructor(materia, calificaciones, edad) {
        super(materia, calificaciones);
        this.edad = edad;
    }
}

const profe_1 = new MaestroDeFisica('fisica', [7,8,5,1,10,5,2,3,5], 8);
const profe_2 = new MaestroDeMusica('musica', [9,10,9,8,9,9,6,7,10], 2);
  
 
/* console.log( profe_1.calcularPromedio() );
console.log( profe_2.calcularPromedio() ); */




//Ejemplo 4 ------------------------------------------------------------->

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

//EJEMPLO 5 ----------------------------------------------------------------------> 


