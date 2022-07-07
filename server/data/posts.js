import mongoose from "mongoose";
import { userVirtualId } from "../database/database.js";

const Schema = mongoose.Schema;

const postSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            required: true,
        },
        author: {
            type: Schema.Types.ObjectId, ref: 'User'
        },
        member: {
            type: Number,
            required: true,
        },
        totalmember: {
            type: Number,
            require: true,
        },
    }
)

userVirtualId(postSchema);

const Post = mongoose.model('Post', postSchema);



export async function create(text, name, member, totalmember) {
    return new Post({
        text,
        member,
        totalmember,
        author: name,
    }).save();
}