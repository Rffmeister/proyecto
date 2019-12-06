class Perro {
     constructor(color,nombre,patas){
         this.color = color;
         this.nombre = nombre;
         this.patas = patas; 

     };

     ladrar(){
         return "waaau"
     };

     getnombre(){
         return "El perro se llama"  (this.nombre)
     };
}



const perro1 = new Perro("cafe","ayudante de santa",4);
const perro2 = new Perro("blanco con negro","snoopy",4);
console.log(perro1get.nombre); 
console.log(perro2get.nombre); 



class Mipinguino {
    constructor(color,nombre,patas) {
        this.color = color;
        this.nombre = nombre; 
        this.patas = patas; 
    };

    graznar(){
        return "kaww kaww!!"
    };

    //volar: function(volara){
      //  if (volara === "Puede volar"){
        //    return "No puedo volar"
        //} else {
          //  return "Puedo volar"
        //}
        
    //}; 

    saludar(){
        return "Hola, soy un pinguino y mi nombre es Misha"  (this.saludar)
    }
    

}

const pinguino1 = new Mipinguino("negro con blanco","Misha",2); 
console.log(pinguino1); 
console.log(pinguino1.volar("Puedo volar"));
