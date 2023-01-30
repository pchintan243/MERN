const express = require('express')
const mongoose = require('mongoose')
mongoose.set('strictQuery', true);
const app = express()
const port = 7800

const DB = 'mongodb+srv://chintan243:Cp954572309492@mernbackend.rrj9mes.mongodb.net/mernstack?retryWrites=true&w=majority';
main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(DB);
    console.log("fsb")

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
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