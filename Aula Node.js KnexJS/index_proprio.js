const database = require('./database')

// INSERT
// var dados = [{
//         name: "Battlefield 3",
//         price: 220.79
//     },
//     {
//         name: "GTA V",
//         price: 121.90
//     },
//     {
//         name: "Minecraft",
//         price: 89.56
//     },

// ]

// database.insert(dados).into("games").then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })


// SELECT
// database.select(["id", "price"]).table("games").then(data => {
//     console.log(data)
// }).catch(err => {
//     console.log(err)
// })

// QUERIES NINHADAS
// database.insert({ name: "Shadow of Colossus", price: 53.89 }).into("games").then(data => {
//     database.select(["id", "price"]).table("games").then(data => {
//         console.log(data)
//     }).catch(err => {
//         console.log(err)
//     })
// }).catch(err => {
//     console.log(err)
// })

// database.where({nome: "Minecraft"}).table("games")

database.table("games").then(data => {
    console.log(data)
})