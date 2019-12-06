const request = require("request"); 



function getPeopleById(idPersonaje){
    return new Promise((resolve, reject)) => {}
        request.get("http://swapi.co/api/people/$(idPersonaje)", (err, response, body) =>{
        if (err) return console.log("Error"}; 
        if (response.statusCode === 200 ){
            const people = JSON.parse(body)
            console.log(people.name); 
            resolve(people); 
        } else {
            reject("Error buscando el personaje")
        }    
         
    }); 
 
    
}

function getMovieById(url){
    return new Promise((resolve,reject) => {
        request.get(url, (err,response,body) => {  
            if (response.statusCode === 200) {
                resolve(JSON.parse(body))        
            } else {
                reject("Error en las peliculas")
            }
        });
     });
    
 }


getPeopleById(29)
   .then((respuesta) =>{
       console.log(repuesta.name);
       return getMovieById(repuesta.films[0])
 })
 .then((result) => {
     console.log(result.ttitle); 
 })
 .catch((err) => {
     console.log(err); 
 })



getPeopleById(20)
    .then((repuesta) => getMovieByUrl(respuesta.films[0] ))
    .then((result) => console.log(result.title))
    .catch((err) => console.log(err))







 
     

