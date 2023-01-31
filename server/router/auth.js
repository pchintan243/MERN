const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('dhskh')
})

router.post('/register', (req, res) => {
    try {
        console.log(req.body);
    }
    catch (error) {
        res.status(404).send(error)
    }
})

module.exports = router;