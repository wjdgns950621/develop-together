const express = require('express');
const router = express.Router();
const User = require('../schemas/user');
const crypto = require('crypto');


router.post('/signup', async (req, res) => {
    try {
        let obj = { userId: req.body.userId };

        let user = await User.findOne(obj);

        if(user) {
            res.json({ message: '이미 존재하는 아이디입니다. 새로운 아이디를 입력해주세요.'})
        } else {
            crypto.randomBytes(64, (err, buf) => {
                if(err) {
                    console.log(err);
                } else{
                    crypto.pbkdf2(
                        req.body.password,
                        buf.toString('base64'),
                        100000,
                        64,
                        'sha512',
                        async (err, key) => {
                            if(err) {
                                console.log(err);
                            } else{
                                buf.toString('base64');
                                obj = {
                                    userId: req.body.userId,
                                    name: req.body.name,
                                    phone: req.body.phone,
                                    password: key.toString('base64'),
                                    salt: buf.toString('base64')
                                };
                                user = new User(obj);
                                await user.save();
                                res.json({ message: '회원가입이 완료되었습니다!'})
                            }
                        }
                    )
                }
            })
        } 
    } catch(err) {
        res.json({ message: false })
    }
})