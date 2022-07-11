import express from 'express';
import * as authController from '../controller/auth.js';


const router = express.Router();

router.post('/signup', authController.signup);
router.post('/signin', authController.signin);
router.get('/refresh', authController.refresh);
router.get('/signout', authController.signout);


export default router;
