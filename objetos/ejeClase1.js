let Mypenguin = {
    character: "yootsiee the Penguin",
    origin: "Donald buck",
    notes: "A baby Penguin in the classic 1939 cartoon"
}

console.log("Hola, soy un pinguino y mi nombre es $ "
(Mypenguin.character));

Mypenguin.puedeVolar = false; 

console.log(Mypenguin); 

Mypenguin.graznar = function(){
    console.log("Kaww Kaww!!");
}

console.log(Mypenguin,graznar());

Mypenguin.saludar = function(){
    console.log("Hola, soy ")
}


Mypenguin.character = "Penguin McPenguinFace";
Mypenguin.saludar();

Mypenguin.volar = function(){
    if(this.puedeVolar) {
        console.log("puedo volar")
    } else {
        console.log(Mypenguin.volar());
    }
}

console.log(Mypenguin.volar()); 

Mypenguin.puedeVolar()= true; 
Mypenguin,volar(); 

//Ejemplo 2 --------------------------------------------> 
let receta = {
    titulo: "Mole",
    porciones: 2,
    ingredientes: "comino", "cacao", "chocolate"

}; 

console.log();


//EJEMPLO 11 -----------------------------------------> 

//let libros = {
  //  titulo: "",
    //autor: "",
    //leido: 

//}


//for(let i = 0; < libros.length i**){
  //  let libro = libro(i);
    //let libroInfo = libro.titulo + "por" libro.autor; 
    //()
//}


//EJEMPLO 12 --------------------------------> 

class Cuenta {
    constructor(titular, cantidad) {
        this.titular = titular
        this.cantidad = cantidad
    }

    ingresar(cantidad){
        if(this.cantidad + cantidad > 900) {
            return "Estas superando el limite de $900,Operacion canelada"
        } else {
            this.cantidad = this,cantidad + cantidad; 
            return "Operacion exitosa; Tu saldo es de $"
            this.cantidad
        }
    }

    retirar(cantidad){
        if(this.cantidad - cantidad < 10) {
            return ""
        } else {
            this.cantidad -= cantidad; 
            return "Has retirado $" $(cantidad). "Tu saldo"
             "ahora es" $ (this.cantidad); 
        }
    }

}

let Cuenta = new Cuenta("Kevin Casas", 350); 
console.log(Cuenta.cantidad);

console.log(Cuenta.ingresar(1000)); 
Console.log(Cuenta.retirar(400)); 
