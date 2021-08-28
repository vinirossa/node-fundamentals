const express = require('express')
const app = express()

app.get("/", function(req, res){
    res.send("Bem vindo ao ExpressJS e Node.js")
})

app.get("/blog/:artigo?", function(req, res){
    var artigo = req.params.artigo

    if (artigo) {
        res.send(`<h2>Artigo: ${artigo}</h2>`)
    } else {
        res.send("Bem vindo ao meu blog")   
    }
})

app.get("/canal/youtube", function(req, res){
    var canal = req.query["canal"]
    
    if (canal) {
        res.send("Bem vindo ao meu canal " + canal)
    } else {
        res.send("Nenhum canal fornecido.")
    }
})

app.get("/ola/:nome/:empresa", function(req, res){
    res.send(`<h1>Olá ${req.params.nome} da empresa ${req.params.empresa}!</h1>`)
})

app.listen(4000, function (erro) {
    if (erro) {
        console.log("Ocorreu um erro.")
    } else {
        console.log("Servidor iniciado com sucesso.")
    }
})