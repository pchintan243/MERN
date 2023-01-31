const express = require('express')
const app = express()
const dotenv = require('dotenv')

dotenv.config({ path: './config.env' })

const port = process.env.PORT;

require("./db/conn");

const User = require('./models/userSchema')

// middleware
// Is use for check the authentication
const middleware = (req, res, next) => {
    console.log("hello");
    next();
}

app.get('/', (req, res) => {
    res.send('bsd');
})

app.get('/about', middleware, (req, res) => {
    res.send('about')
})

app.get('/contact', (req, res) => {
    res.send('bscontactd')
})

app.get('/signin', (req, res) => {
    res.send('signin')
})

app.get('/login', (req, res) => {
    res.send('login')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})