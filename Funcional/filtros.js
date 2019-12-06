const lista = [12,653,231,978,976, 463,213,189,829]
const listaObj = [
    {nombre: "Lola", age: 20},
    {nombre: "Lolo", age: 22},
    {nombre: "Lula", age: 23},
    {nombre: "Lela", age: 24},
    {nombre: "Lala", age: 25},] 

//const filtro = []
//for(let i = = 0; i < listaObj.length; i++){
  //  if (listaObj[i].age > 22){
    //    filtros.push(listado[i])
    //}
//}
// console.log(filtro); 


 const filtro =listaObj.filter((elemento,index,lista) => { 
     return elemento.age > 22 
 )};
    
console.log(filtro); 