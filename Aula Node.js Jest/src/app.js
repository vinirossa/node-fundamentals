const express = require('express')
const app = express()

app.get("/", (req, res) => {
    res.json({ success: true })
})

app.get("/cor/:pessoa", (req, res) => {
    var pessoa = req.params.pessoa

    if (pessoa == "vinicius") {
        res.json({ cor: "azul" })
    }
})

module.exports = app






// module.exports = {
//     soma: function(a, b) {
//         return a + b
//     },
//     mult: function(a, b) {
//         return a * b
//     }
// }