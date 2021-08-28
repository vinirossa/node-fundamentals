const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const jwt = require('jsonwebtoken')

const JWTSecret = "22b03027fe17bac8f401346e50a6167843acbb59"

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

function auth(req, res, next) {
  const authToken = req.headers['authorization']

  if (authToken != undefined) {

    var token = (authToken.split(" "))[1]

    jwt.verify(token, JWTSecret, (err, data) => {

      if (err) {

        res.status(401)
        res.json({ err: "Token inválido!" })

      } else {

        req.token = token
        req.loggedUser = { id: data.id, email: data.email }
        next()
      }
    })

  } else {
    res.status(401)
    res.json({ err: "Token inválido!" })
  }
}

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
  ],
  users: [{
      id: 1,
      name: "Vinícius Pereira",
      email: "viniciuspsb@gmail.com",
      password: "nodejs342"
    },
    {
      id: 20,
      name: "Guilherme Silva",
      email: "silvaguilherme@hotmail.com",
      password: "54php23admin"
    }
  ]
}


app.get("/games", auth, (req, res) => {
  res.statusCode = 200
  res.json({ user: req.loggedUser, games: db.games })
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

app.post("/game", auth, (req, res) => {
  var { id, title, price, year } = req.body

  db.games.push({
    id,
    title,
    price,
    year
  })

  res.sendStatus(200)
})

app.delete("/game/:id", auth, (req, res) => {

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

app.put("/game/:id", auth, (req, res) => {

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

app.post("/auth", auth, (req, res) => {
  var { email, password } = req.body

  if (email != undefined) {
    var user = db.users.find(u => u.email == email)

    if (user != undefined) {
      if (user.password == password) {

        jwt.sign({ id: user.id, email: user.email }, JWTSecret, { expiresIn: '48h' }, (err, token) => {
          if (err) {
            res.status(400)
            res.json({ err: "Falha interna" })

          } else {
            res.statusCode = 200
            res.json({ token: token })
          }
        })

      } else {
        res.statusCode = 401
        res.json({ err: "Credenciais inválidas." })
      }
    } else {
      res.statusCode = 404
      res.json({ err: "O e-mail não encontrado na base de dados." })
    }
  } else {
    res.statusCode = 400
    res.json({ err: "O e-mail é inválido." })
  }
})


app.listen(45678, () => {
  console.log("API rodando...")
})