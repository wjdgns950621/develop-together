import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import 'express-async-errors';
import authRouter from './router/auth.js';
import boardRouter from './router/posts.js';
import { connectDB } from './database/database.js';
import { config } from './config/config.js';

const app = express();

const corsOptions = {
    origin: true,
    credentials: true,
};

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors(corsOptions));

app.use(helmet());
app.use(morgan('tiny'));
app.use(cookieParser());

app.use('/auth', authRouter);
app.use('/posts', boardRouter);

app.use((error, req, res, next) => {
    if(error) {
        console.log(error);
        res.status(500).json({ message: 'something wrong'})
    }
})

connectDB().then(() => {
    console.log('connect!');
    app.listen(config.host.port)
});