const mongoose = require('mongoose')

const Article = new mongoose.Schema({
    title: String,
    author: String,
    body: String,
    date: { type: Date, default: Date.now },
    special: Boolean,
    summary: {
        content: String,
        author: String
    }
})

module.exports = Article