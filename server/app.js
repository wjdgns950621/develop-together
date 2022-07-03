const express = require('express');
const cors = require('cors');
const connect = require('./schemas');

const app = express();

connect();

const corsOptions = {
    origin: true,
    credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// app.use('/users', userRouter);
// app.use('/posts', postRouter);

app.listen(8080, () => {
    console.log('연결완료')
})