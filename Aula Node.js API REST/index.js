const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var db = {
    games: [{
            id: 23,
            title: "Call of Duty MW",
            year: 2019,
            price: 60
        },
        {
            id: 65,
            title: "Sea of Thieves",
            year: 2018,
            price: 40
        },
        {
            id: 2,
            title: "Minecraft",
            year: 2012,
            price: 20
        }
    ]
}


app.get("/games", (req, res) => {
    res.statusCode = 200
    res.json(db.games)
})

app.get("/game/:id", (req, res) => {

    if (isNaN(req.params.id) || req.params.id < 1) {
        res.sendStatus(400)
    }

    var id = parseInt(req.params.id)
    var game = db.games.find(g => g.id == id)

    if (game != undefined) {
        res.statusCode = 200
        res.json(game)
    } else {
        res.sendStatus(404)
    }
})

app.post("/game", (req, res) => {
    var { title, price, year } = req.body

    db.games.push({
        id: 102,
        title,
        price,
        year
    })

    res.sendStatus(200)
})

app.delete("/game/:id", (req, res) => {

    if (isNaN(req.params.id) || req.params.id < 1) {
        res.sendStatus(400)
    }

    var id = parseInt(req.params.id)
    var index = db.games.findIndex(g => g.id == id)

    if (index == -1) {
        res.sendStatus(404)
    } else {
        db.games.splice(index, 1)
        res.sendStatus(200)
    }
})

app.put("/game/:id", (req, res) => {

    if (isNaN(req.params.id) || req.params.id < 1) {
        res.sendStatus(400)
    }

    var id = parseInt(req.params.id)
    var game = db.games.find(g => g.id == id)

    if (game != undefined) {
        var { title, price, year } = req.body

        if (title != undefined) {
            game.title = title
        }

        if (price != undefined) {
            game.price = price
        }

        if (year != undefined) {
            game.year = year
        }

        res.sendStatus(200)

    } else {
        res.sendStatus(404)
    }
})


app.listen(45678, () => {
    console.log("API rodando...")
})