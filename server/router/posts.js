import express from 'express';
import * as postsController from '../controller/posts.js';

const router = express.Router();

// router.get('/posts', postsController.getPosts);
router.post('/posts', postsController.createPost);


export default router;