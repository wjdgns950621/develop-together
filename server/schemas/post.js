const mongoose = require('mongoose');

const { Schema } = mongoose;
const {
    Types: { ObjectId }
} = Schema;
const postSchema = new Schema({
    name: {
        type: ObjectId,
        require: true,
        ref: "User"
    },
    content: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    totalMember: {
        type: Number,
        require: true
    },
    currentMember: {
        type: Number,
        require: true,
    },
})

module.exports = mongoose.model('Post', postSchema);