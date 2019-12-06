const express = require("express"); 
const { Director, Peliculas } = require("./models/index"); 

const app = express(); 

app.use(express.urlencoded({ extended: true  }));
app.use(express.json());

app.post("/director", (req, res ) => {
    const newDirector = Director(req.body);
    newDirector.save((err, director) => {
         err 
        ? res.status(400).send(err)
        : res.status(201).send(director)
        
    }); 
});

app.get("/all/director", (req,res) => {
    Director.find().exec()
      .then((result) => {
          res.send(result);
      }).catch((err) => {
          res.status(400).send(err)
      });
});

app.get("/director/:id", (req, res) => {
    const id = req.params.id
    Director.findById(id).exec()
     .then((result) => {
         result
        ? res.send(result)
        : res.status(404).send({message: "Director not Function" });
     }).catch((err) =>{
         res.status(400).send(err)
     });
});

app.patch("/director/:id", (req, res) => {
    const id = req.params.id
    Director.findByIdAndUpdate(id,
        {$set: req.body}, 
        {new: true}).exec()
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            res.status(400).send(err);
        });

});

app.post("/add/premio/:idDirector", (req,res) => {
    const id = req.params.idDirector
    Director.findByIdAndUpdate(id, { $push: {premios: [req.body.premios]  } }, {new: true}).exec()
    .then((result) => {
        res.status(200).sen(result);
    }).catch((err) => {
        res.status(400).send(err)
    });
});

//---------------------------------------------------------------------------------------------------------->


app.post("/peliculas", (req, res ) => {
    const newPeliculas = Peliculas(req.body);
    newPeliculas.save((err, peliculas) => {
         err 
        ? res.status(400).send(err)
        : res.status(201).send(peliculas)
        
    }); 
});

app.get("/all/peliculas", (req,res) => {
    Peliculas.find()
      .populate("director")
      .exec()
      .then((result) => {
          res.send(result);
      }).catch((err) => {
          res.status(400).send(err)
      });
});

app.get("/peliculas/:id", (req, res) => {
    const id = req.params.id
    Peliculas.findById(id).exec()
     .then((result) => {
         result
        ? res.send(result)
        : res.status(404).send({message: "Peliculas not Function" });
     }).catch((err) =>{
         res.status(400).send(err)
     });
});

app.patch("/peliculas/:id", (req, res) => {
    const id = req.params.id
    Peliculas.findByIdAndUpdate(id,
        {$set: req.body}, 
        {new: true}).exec()
        .then((result) => {
            res.send(result);
        }).catch((err) => {
            res.status(400).send(err);
        });

});

app.post("/add/premio/:idPeliculas", (req,res) => {
    const id = req.params.idPeliculas
    Peliculas.findByIdAndUpdate(id, { $push: {premios: [req.body.premios]  } }, {new: true}).exec()
    .then((result) => {
        res.status(200).sen(result);
    }).catch((err) => {
        res.status(400).send(err)
    });
});




app.listen(3000, () => {
    console.log("server on")
});