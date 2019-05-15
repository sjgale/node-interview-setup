const bodyParser = require('body-parser')
const express = require('express')
const helmet = require('helmet')

const app = express()
app.use(helmet)
app.use(bodyParser)

app.post('/sum', sum)

app.use('/', fourOhFour)

function sum(req, res, next) {
    const numbers = req.body.numbers
    const sum = numbers.reduce((number, sum = 0) => number + sum)
    res.send({sum})
}

function fourOhFour(req, res, next) {
    res.status(404).send()
}

module.exports = {app, sum}