import mongoose from "mongoose";
import { userVirtualId } from "../database/database.js";



const postSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: true,
        },
        userId: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        
    },
    { timestamps: true}
)

userVirtualId(postSchema);

const Post = mongoose.model('Post', postSchema);



export async function create(text, userId, phone, name) {
    return new Post({
        text,
        userId,
        phone,
        name,
    }).save();
}

export async function getByPosts() {
    return await Post.find().sort({ createdAt: -1 });
}

export async function getById(id) {
    return Post.findById(id);
}

export async function remove(id) {
    return Post.findByIdAndDelete(id);
}