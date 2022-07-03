const mongoose = require('mongoose');

const { Schema } = mongoose;
const userSchema = new Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    salt: {
        type: String,
        required: true,
    }
})

module.exports = mongoose.model('User', userSchema);