const express = require('express');
const { default: Post } = require('../../client/src/components/mainData/Post');
const router = express.Router();
const Post = require('../schemas/post');

router.post('/write', async (req, res) => {
    try {
        let obj;

        obj = {
            name: req.body.name,
            content: req.body.content,
            totalMember: req.body.totalMember,
            currentMember: req.body.currentMember,
            createdAt: req.body.createdAt,
        }

        const Post = new Post(obj);
        await Post.save();
        res.json({ message: '게시글이 업로드 되었습니다.'})
    } catch(err) {
        res.json({ message: false });
    }
});

module.exports = router;