var express = require("express")
var app = express()
var session = require("express-session")
var flash = require("express-flash")
var bodyParser = require("body-parser")
const cookieParser = require('cookie-parser');
// var cookieParser = require("cookie-parser")

app.set('view engine', 'ejs')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cookieParser("jsaddsh"))
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))



app.use(flash())


app.get("/", (req, res) => {
    var emailError = req.flash("emailError")
    var nameError = req.flash("nameError")
    var email = req.flash("email")
    var name = req.flash("name")

    emailError = (emailError == undefined || emailError.length == 0) ? undefined : emailError
    nameError = (nameError == undefined || nameError.length == 0) ? undefined : nameError
    email = (email == undefined || email.length == 0) ? "" : email
    name = (name == undefined || name.length == 0) ? "" : name

    res.render("index", { email, name, emailError, nameError })
})

app.post("/form", (req, res) => {
    var { email, name, points } = req.body

    var emailError, nameError, pointsError

    if (email == undefined || email == "") {
        emailError = "O e-mail não pode estar vazio"
    }

    if (name == undefined || name == "") {
        nameError = "O nome não pode estar vazio"
    }

    if (emailError != undefined || nameError != undefined) {
        req.flash("emailError", emailError)
        req.flash("nameError", nameError)

        req.flash("email", email)
        req.flash("name", name)

        res.redirect("/")
    } else {

        res.send("Form correto!")
    }
})

app.listen(5678, (req, res) => {
    console.log("Servidor rodando...")
})