const request = require("request"); 


function getPeopleById(idPersonaje){ 
    return new Promise((resolve, reject) => {
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

    })
}


return new Promise((resolve, reject) => {
    
})