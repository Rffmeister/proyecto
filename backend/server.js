const express = require("express")

const app = express(); 
//Configuracion para aceptar body en el objeto "reg"
app.use(express.urlencoded({extended: true }));
app.use(express.json());


app.get("/",(request, response)=> {
    console.log("Entreeee"); 
    response.send({mensaje: "Mi primer respuesta desde el backend"})
}); 

app.get("/saludo", (req,res) => {
    res.send({mensaje: "hola"})

}); 

http://localhost:3000/user/21 => 21 es una variable 
app.get("/users/:uid", (req,res) => {
    console.log(req.params);
    res.send({mesage: "Enpoint de usuario: $(req.params.id)"})
});

app.get("/search",(req,res) => {
    console.log(req.requery);
    res.send({mesage: "Busqueda"})
});

app.post("/users", (req,res) => {
    console.log(req,body);
    res.send({mesage: "POST"})
    //res.status(201).send({...req,body,id: 1})
});

app.listen(3000, () => {
    console.log("sever on port 3000"); 
}); 