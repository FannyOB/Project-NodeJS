const express = require('express')// on recupere le paquet express avec le mot clé require, qui lui indique d'aller chercher express ds le node module
const {success} = require('./helper')
let pokemons = require('./mock-pokemon')

const app = express() //création d'une instance grace à la méthode du même nom, ce sera notre petit serveur
const port = 3000 //port ds lequel on démarre notre api


app.get('/',(req, res) => res.send('Hello again, Express 5! 👋🏾')) // "req" est la requete et "res" est la reponse objet renvoyé à notre client


//nouveau point de terminaison, On retourne la liste des pokémons au format JSON, avec un message:
app.get('/api/pokemons', (req, res) => {
    const message =  'La liste des pokemons a bien été récupérée.' 
    //res.json(`Il y a ${pokemons.length} pokemons dans le pokédex, pour le moment.`) //Ici on affiche le nobre total de pokémons
    res.json(success(message,pokemons))
} )

app.get('/api/pokemons/:id', (req, res) => { //ici on va extraire l'identifiant ds l'url id
    const id = parseInt(req.params.id)
    const pokemon = pokemons.find(pokemon => pokemon.id === id)
    const message =  'Un pokemon a bien été trouvé.' 
   // res.send(`Vous avez demandé le pokemon n°${pokemon.name}`) //on n'utilise plus "send" car on utilise json. 
   res.json(success(message, pokemon))
})





app.listen(port, () => console.log(`Notre application Node est démarée sur : http://localhost:${port}`))// méthode listen

//console.log('Hello Node 👋🏾!!')

