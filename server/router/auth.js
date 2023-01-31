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
        else if (password !== cpassword) {
            return res.status(400).send("Password are not same");
        }
        else {
            const user = new User({ name, email, phone, work, password, cpassword });
            const userRegister = await user.save();
            res.send("su")
        }
    }
    catch (error) {
        res.status(404).send(error)
    }
})

//login route

router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send("please filled the data")
        }
        const userLogin = await User.findOne({ email: email });
        if (!userLogin) {
            res.status(400).json({ error: "Email does not exist" })
        }
        else {
            res.send("success login");
        }
    }
    catch (error) {
        res.status(404).send(error)
    }
})

module.exports = router;