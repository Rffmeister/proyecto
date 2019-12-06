const lista = [12,653,231,978,976, 463,213,189,829]
const listaObj = [
    {nombre: "Lola", age: 20},
    {nombre: "Lolo", age: 22},
    {nombre: "Lula", age: 23},
    {nombre: "Lela", age: 24},
    {nombre: "Lala", age: 25},

] 


 // const acumulador = []
//for (let i = 0; i <= lista.length; i++){
  //  console.log(listaObj{i}); 
    //acumulador.push(listaObj[i].nombre)
//}
  //console.log(acumulador); 




const listaNombre = lista.map((elemento,index,lista) => {
    console.log(elemento.nombre); 
    return elemento.nombre
}); 

console.log(listaNombre); 