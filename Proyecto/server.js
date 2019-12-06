const express = require("express"); 
const { publicacion, usuarios } = require("./models/index");

const app = express();

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());

app.post("/publicacion", (req, res) => {
    const newpublicacion = publicacion(req.body);
    newpublicacion.save((err, publicacion) => {
        err
        ? res.status(400).send(err)
        : res.status(201).send(publicacion)

    });
}); 

app.get("/all/publicacion", (req,res) => {
    publicacion.find().exec()
      .then((result) => {
          res.send(result);
      }).catch((err) => {
          res.status(400).send(err)
      });
});

app.get("/publicacion/:id", (req, res) => {
    const id = req.params.id
    publicacion.findById(id)
     .populate("usuarios")
     .exec()
     .then((result) => {
         result
        ? res.send(result)
        : res.status(404).send({message: "publicacion not Function" });
     }).catch((err) =>{
         res.status(400).send(err)
     });
});

app.patch("/publicacion/:id", (req, res) => {
    const id = req.params.id
    publicacion.findByIdAndUpdate(id,
        {$set: req.body}, 
        {new: true}).exec()
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            res.status(400).send(err);
        });

});

app.post("/add/comentario/:idPublicacion", (req,res) => {
    const id = req.params.idPublicacion
    publicacion.findByIdAndUpdate(id, { $push: {premios: [req.body.premios]  } }, {new: true}).exec()
    .then((result) => {
        res.status(200).sen(result);
    }).catch((err) => {
        res.status(400).send(err)
    });
});



//-------------------------------------------------------------------------------------------------->

app.post("/usuarios", (req, res) => {
    const newUsuarios = usuarios(req.body);
    newUsuarios.save((err, usuarios) => {
        err
        ? res.status(400).send(err)
        : res.status(201).send(publicacion)

    });
}); 

app.get("/all/usuarios", (req,res) => {
    usuarios.find().exec()
      .then((result) => {
          res.send(result);
      }).catch((err) => {
          res.status(400).send(err)
      });
});

app.get("/usuarios/:id", (req, res) => {
    const id = req.params.id
    usuarios.findById(id).exec()
     .then((result) => {
         result
        ? res.send(result)
        : res.status(404).send({message: "usuarios not Function" });
     }).catch((err) =>{
         res.status(400).send(err)
     });
});

app.patch("/usuarios/:id", (req, res) => {
    const id = req.params.id
    usuarios.findByIdAndUpdate(id,
        {$set: req.body}, 
        {new: true}).exec()
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            res.status(400).send(err);
        });

});

//app.p



app.listen(3000, () => {
    console.log("server on")
});


