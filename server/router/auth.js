const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticate = require("../middleware/authenticate")

require("../db/conn");
const User = require("../models/userSchema");

router.get('/', (req, res) => {
    res.send('dhskh')
})

router.post('/register', async (req, res) => {
    const { name, email, phone, password, cpassword } = req.body;
    try {
        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(422).json({ error: "Email was already exist" });
        }
        else if (password !== cpassword) {
            return res.status(422).json({ error: "Password are not same" });
        }
        else {
            const user = new User({ name, email, phone, password, cpassword });
            const userRegister = await user.save();
            res.status(201).json({ message: "User Registered Successfully..!!" });
        }
    }
    catch (error) {
        res.status(404).json({ error });
    }
})

//login route

router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "please filled the data}" })
        }
        const userLogin = await User.findOne({ email: email });
        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();
            console.log(token);

            // 25892 is millisecond of 30days
            // After 30days token will be expires
            res.cookie("jwttoken", token, {
                expires: new Date(Date.now() + 2589200000),
                httpOnly: true
            })

            if (!isMatch) {
                res.status(400).json({ error: "Invalid credentials " })
            }
            else {
                res.json({ message: "success login" });
            }
        }
        else {
            res.status(400).json({ error: "Email does not exist" })
        }
    }
    catch (error) {
        res.status(404).json({ error: "Error" })
    }
})

// authenticate is user for user not directly go to any page without login
router.get("/about", authenticate, (req, res) => {
    res.send(req.rootUser);
})

// Get user data for contact page and home page
router.get('/getdata', authenticate, (req, res) => {
    res.send(req.rootUser);
});

// Contact us Page
router.post('/contact', authenticate, async (req, res) => {
    try {
        const { name, email, phone, message } = req.body;
        if (!name || !email || !phone || !message) {
            return res.json({ error: "Please filled the contact form correctly..!!" })
        }

        // Get the user detail by id
        const userContact = await User.findOne({ _id: req.userID });

        if (userContact) {
            const userMessage = await userContact.addMessage(name, email, phone, message);
            await userContact.save();
            res.status(201).json({ message: "User contact successfully..!!" })
        }
    } catch (error) {
        console.log(error);
    }
});

// Logout section
router.get("/logout", (req, res) => {
    // Clear the cookie so user can't able to go anypage without login again
    // Make sure cookies name is same as you provide
    res.clearCookie('jwttoken', { path: "/" })
    res.status(200).send('User Logout');
})

module.exports = router;