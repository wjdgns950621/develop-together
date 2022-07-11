import * as postsRepository from '../data/posts.js';


export async function createPost(req, res) {
    const { text, userId, phone, name } = req.body;
    
    const post = await postsRepository.create(text, userId, phone, name);
    res.status(201).json(post);
}

export async function getPost(req, res) {
    const token = req.cookies.refreshToken

    if(token) {
        const findPosts = await postsRepository.getByPosts();
        return res.status(200).json(findPosts);
    }
    return res.status(404).json({message: '게시물을 찾을 수 없습니다.'})
    
}

export async function deletePost(req, res) {
    const postId = req.params.postid;
    
    const post = await postsRepository.getById(postId);

    if(!post) {
        return res.status(404).json({ message: '게시물을 찾을 수 없습니다.'})
    }
    await postsRepository.remove(postId);
    res.sendStatus(204);
}