import bcrypt from 'bcrypt';
import * as usersRepository from '../data/auth.js';
import { config } from '../config/config.js';
import jwt from 'jsonwebtoken';


export async function signup(req, res) {
    const { userId, password, name, phone } = req.body;
    const found = await usersRepository.findByUserId(userId);
    if(found) {
        res.status(409).json({ message: `${userId}은 이미 가입된 아이디 입니다.`});
    }
    
    const hashed = await bcrypt.hash(password, config.bcrypt.saltRounds);
    const user = await usersRepository.createUser({
        userId,
        name,
        phone,
        password: hashed,
    });
    res.status(201).json({ user, userId })
}

export async function signin(req, res) {
    const { userId, password } = req.body;
    
    const user = await usersRepository.findByUserId(userId);
    
    if(!user) {
        return res.status(401).json({ message: '존재하지않는 아이디 입니다.'});
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    
    if(!isValidPassword) {
        return res.status(401).json({ message: '비밀번호가 일치하지 않습니다.'});
    }

    const accessToken = jwt.sign({ id: user.id}, config.jwt.access_secret, {
        expiresIn: config.jwt.access_expiresInSec,
    });
    const refreshToken = jwt.sign({ id: user.id }, config.jwt.refresh_secret, {
        expiresIn: config.jwt.refresh_expiresInSec,
    });
    
    res.cookie('refreshToken', refreshToken, { httpOnly: true });
    res.status(200).json({ accessToken, userId: user.userId })
}

export async function refresh(req, res) {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
        return res.json({ data: null, message: ' refresh token not provided ' });
        }

    try {
        const decoded = jwt.verify(refreshToken, config.jwt.refresh_secret);

        const found = await usersRepository.findById(decoded.id);
        if (!found) {
            return res.status(403).json({ message: ' Forbidden ' });
        }

        const accessToken = jwt.sign({ id: found.id }, config.jwt.access_secret, {
        expiresIn: config.jwt.access_expiresInSec,
        });
        res.json({
        accessToken,
        userId: found.userId,
        phone: found.phone,
        message: ' complete access token issuance ',
        });
        } catch (error) {
        console.log(error);
        if (
        error.name === 'TokenExpiredError' ||
        error.name === 'invalid signature' ||
        error.name === 'jwt malformed'
        ) {
        return res.status(401).json({ message: ' Unauthorized ' });
        }
        next(error);
    }
}