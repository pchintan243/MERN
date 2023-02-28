const express = require('express')
const app = express();
const dotenv = require('dotenv')
const cors = require('cors')
app.use(cors());
const cookieParser = require('cookie-parser')
app.use(cookieParser())
dotenv.config({ path: './config.env' })

const port = process.env.PORT;

require("./db/conn");

app.use(express.json());

const User = require('./models/userSchema')
// Get router file
app.use(require('./router/auth'));

// middleware
// Is use for check the authentication
const middleware = (req, res, next) => {
    console.log("hello");
    next();
}

app.get('/', (req, res) => {
    res.send('bsd');
})

// app.get('/about', middleware, (req, res) => {
//     res.send('about')
// })

// app.get('/contact', (req, res) => {
//     res.send('bscontactd')
// })

app.get('/signin', (req, res) => {
    res.send('signin')
})

app.get('/login', (req, res) => {
    res.send('login')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})