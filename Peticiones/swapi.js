const request = require("request");

const getNames = (id) => {
    request.get('https://swapi.co/api/people/' + id,(error, response, body) => {
        

            const Star = JSON.parse(body);

            const name = Star.name;

            console.log(JSON.parse(body).name)

            
        

        
    });
};

getNames(1)





