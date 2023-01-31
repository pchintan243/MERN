const express = require('express');

const router = express.Router();

require("../db/conn");
const User = require("../models/userSchema");

router.get('/', (req, res) => {
    res.send('dhskh')
})

router.post('/register', async (req, res) => {
    const { name, email, phone, work, password, cpassword } = req.body;
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(400).send("Email was already exist");
        }
        const user = new User({ name, email, phone, work, password, cpassword });
        const userRegister = await user.save();
        res.send("su")
    }
    catch (error) {
        res.status(404).send(error)
    }
})

module.exports = router;