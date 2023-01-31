const express = require('express');

const router = express.Router();

require("../db/conn");
const User = require("../models/userSchema");

router.get('/', (req, res) => {
    res.send('dhskh')
})

router.post('/register', (req, res) => {
    try {
        const { name, email, phone, work, password, cpassword } = req.body;
        const user = new User({ name, email, phone, work, password, cpassword });
        user.save();
        res.send("su")
    }
    catch (error) {
        res.status(404).send(error)
    }
})

module.exports = router;