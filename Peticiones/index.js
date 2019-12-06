const request = require("request"); 

request.get("https://pokeapi.co/api/v2/pokemon/fearow", (error, response,body)=>{
    //console.log(response,body) any
    console.log(JSON.parse(body).moves)
    console.log(JSON.parse(body).name)

    //conts pokemon = JSON.parse(body); 
    
    //const moves = pokemon.movesM;

    //const name = pokemon.name; 

    //for (let i = 0; index < moves.length; i++) {
      //  console.log(moves(i).move.name)
        
    //}

    //console.log("Estos son los movimientos de $(name)")

    //}else{
      //  console.log(response.statusCode);

    //}

}); 