const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    cpassword: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    },
    // Make sure :Write messages don't write name field value in schema because more than one messages are there
    messages: [
        {
            name: {
                type: String,
                required: true
            },
            email: {
                type: String,
                required: true
            },
            phone: {
                type: Number,
                required: true
            },
            message: {
                type: String,
                required: true
            }
        }
    ],
    tokens: [
        {
            // Store the token
            token: {
                type: String,
                required: true
            }
        }
    ]
})

// We are hashing the password
userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcrypt.hash(this.password, 12);
        this.cpassword = await bcrypt.hash(this.cpassword, 12);
    }
    next();
});

// We are generating token
userSchema.methods.generateAuthToken = async function () {
    try {
        // Generate the token
        let token1 = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        // Add the token
        this.tokens = this.tokens.concat({ token: token1 });
        // Save the token in our database
        await this.save();
        return token1;
    }
    catch (error) {
        console.log(error);
    }
}


// Store the messages
userSchema.methods.addMessage = async function (name, email, phone, message) {
    // Add this detail in userschema
    try {
        this.messages = this.messages.concat({ name, email, phone, message });
        await this.save();
        return this.messages;
    } catch (error) {
        console.log(error);
    }
}


const User = mongoose.model('User', userSchema);

module.exports = User;