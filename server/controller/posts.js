import * as postsRepository from '../data/posts.js';




export async function createPost(req, res) {
    const { text, member, totalmember } = req.body;
    const post = await postsRepository.create(text, member, totalmember, req.name);
    res.status(201).json(post);
}