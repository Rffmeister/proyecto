const express = require("express"); 

const  app = express(); 
app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.get("/api/", (request, response) => {
    console.log("Hola mundo");
    response.send({mensaje: "Hola mundo"}); 
}); 