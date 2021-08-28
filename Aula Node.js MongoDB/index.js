const mongoose = require('mongoose')
const Article = mongoose.model("Article", require('./Article'))

mongoose.connect("mongodb://localhost:27017/aulaMongo", { useNewUrlParser: true, useUnifiedTopology: true })

//// INSERT
// var article = new Article({
//     title: "PHP ou Node.js?",
//     author: "Alana Nogueira",
//     body: "Apsum ipsum lorem ipsum",
//     special: true,
//     summary: {
//         content: "Apsum apsum apsum apsum pasrem",
//         author: "Alana Nogueira"
//     }
// })

// article.save().then(() => {
//     console.log("Registro inserido com sucesso")
// }).catch(err => {
//     console.log(err)
// })

// // SELECT ALL
// Article.find({}).then(articles => {
//     console.log(articles)
// }).catch(err => {
//     console.log(err)
// })

//// SELECT WHERE
// Article.find({ _id: "60f58b40fee18e1d804f72f0" }).then(articles => {
//     console.log(articles)
// }).catch(err => {
//     console.log(err)
// })

//// SELECT ONE WHERE
// Article.findOne({ "summary.content": "Apsum apsum apsum apsum pasrem" }).then(articles => {
//     console.log(articles)
// }).catch(err => {
//     console.log(err)
// })

//// DELETE
// Article.findByIdAndDelete("60f58b40fee18e1d804f72f0").then(() => {
//     console.log("Registro deletado com sucesso")
// }).catch(err => {
//     console.log(err)
// })

//// UPDATE
// Article.findByIdAndUpdate("60f58b2a1a42032c18c054f0", {
//     title: "Aprendendo React",
//     author: "Bianca Lima",
//     "summary.content": "React - lorem ipsum apsum lorem"
// }).then(() => {
//     console.log("Registro atualizado com sucesso")
// }).catch(err => {
//     console.log(err)
// })