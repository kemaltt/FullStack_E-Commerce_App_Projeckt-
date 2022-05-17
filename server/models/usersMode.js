const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: [10, 'Email must be longer than 10 characters'],
        match: /.+\@.+\..+/
    },
    name: {
        type: String,
        required: true,
        minlength: [3, 'Email must be longer than 2 characters'],
    },
    surname: {
        type: String,
        required: true,
        minlength: [3, 'Email must be longer than 2 characters'],
    },
    password: {
        type: String,
        required: true,
    },
    favs: {
        type: Array,
        default: []
    }
})

const Users = mongoose.model('User', userSchema)
module.exports = Users;