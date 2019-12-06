const ayudantesDeSanta = {
    ojos: 2,
    patas: 4,
    nombre: "Ayudante de santa",
    raza: "Galgo",
    ladrar: function () {
        return "waaaaau"
    },
    comer: function(comida){
        if (comida === "Croquetas"){
            return "wakala"
        } else {
            return "Yomi yomi"
        }
        
    } 
}

const snoopy = {
    ojos: 2,
    patas: 4,
    nombre: "Snoopy",
    raza: "Beagle",
    ladrar: function () {
        return "waaaaau"
    },
    comer: function(comida){
        if (comida === "Croquetas"){
            return "wakala"
        } else {
            return "Yomi yomi"
        }
        
    } 
}

console.log(ayudantesDeSanta.comer("croquetas")); 
console.log(snoopy.raza)