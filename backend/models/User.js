const { Schema, model } = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const User = new Schema({

    email: {
        type: String,
        required: [true, 'Please eneter your email.'],
        unique: true,
        validate: [validator.isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please eneter your password.'],
        minlength: [6, 'Min password length is 6 chars'],
        select: false
    },

    createdAt: {
        type: Date,
        default: Date.now
    },
})

User.pre('save', async function () {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
})

User.methods.getJwtToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET)
}

User.methods.comparePasswords = async function (password) {
    return await bcrypt.compare(password, this.password)
}


module.exports = model('user', User)