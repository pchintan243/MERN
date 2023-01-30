const express = require('express')
const app = express()
const port = 7800

app.get('/', (req, res) => {
    res.send('bsd')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})