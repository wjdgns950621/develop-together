import express from 'express';
import * as postsController from '../controller/posts.js';

const router = express.Router();

router.get('/', postsController.getPost);
router.post('/posts', postsController.createPost);
router.delete('/:postid', postsController.deletePost);


export default router;