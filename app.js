const express = require('express')// on recupere le paquet express avec le mot clé require, qui lui indique d'aller chercher express ds le node module

const app = express() //création d'une instance grace à la méthode du même nom, ce sera notre petit serveur
const port = 3000 //port ds lequel on démarre notre api

app.get('/',(req, res) => res.send('Hello again, Express 5! 👋🏾')) // "req" est la requete et "res" est la reponse objet renvoyé à notre client

app.get('/api/pokemons/:id', (req, res) => { //ici on va extraire l'identifiant ds l'url id
 const id = req.params.id
    res.send(`Vous avez demandé le pokemon n°${id}`)
})



app.listen(port, () => console.log(`Notre application Node est démarée sur : http://localhost:${port}`))// méthode listen

//console.log('Hello Node 👋🏾!!')

