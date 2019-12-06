const request = require("request"); 
const url_api = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';
​

function createAuthor(nombre, apellidos,nac,bio,gender,); 
    const JsonSend ={
        
            id: 3568,
            name: nombre,
            last_name: apellidos,
            nacionalidad: nac,
            biography: bio,
            gender,
            age,
        

    };

    request.post(url, {form: jsonSend}, (err, res, body) => {
        console.log('🤠', res.statusCode);
        console.log(JSON.parse(body));
    });


   function createAuthor(nombre, apellidos, nac,bio, gender, age) {
       const jsonSend ={
           name: nombre,
           last_name: apellidos, 
           nacionalidad: nac,
           biography: bio, 
           gender, 
           age,
       }; 

       request.post(URL,{form: JsonSend}, (err, res, body) => {
           console.log(res.statusCode); 
           console.log(JSON.parse(body)); 

       });

       
   }


  function updateNameAuthorById(idAuthor, name) {
      const json = (name)
      request.patch("${URL}$(idAuthor)/" , {form: json}, (err, res, body) => {
          console.log(res.statusCode); 
          console.log(JSON.parse(body)); 
      })
  }



function getAllAuthors(){
    request.get(URL,(err, res, body) => {
        console.log(res.statusCode);
        console.log(JSON.parse(body)); 
    })
}

function getdeleteAuthorById(idAuthor){
    request.delete("${URL}${idAuthor}/",(err, res, body) => {
        console.log(res.statusCode); 
        console.log(JSON.parse(body)); 
    })
} 

createAuthor("Cinta roja 36", "Otro batch", "MX", "lorem" ); 
//updateNameAuthorById("3568", "Cinta roja"); 
//getAuthorById("3568"); 
//getAllAuthors("3568", "Cinta roja");   
//getdeleteAuthorById("3568"); 
