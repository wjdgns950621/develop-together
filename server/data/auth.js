import mongoose from "mongoose";
import { userVirtualId } from "../database/database.js";

const userSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    password: {
        type: String
    },
})

userVirtualId(userSchema);
const User = mongoose.model('User', userSchema);

export async function findByUserId(userId) {
    return User.findOne({ userId });
}

export async function findById(id) {
    return User.findById(id);
}

export async function createUser(user) {
    return new User(user).save().then((data) => data.id);
}

export default User;