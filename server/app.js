const express = require('express');
const app = express();


app.use(
    cors({
        origin: 'http://localhost:8080',
        credentials: true,
        methods: ['GET', 'POST', 'PUT', "DELETE"],
    })
);

app.listen(8080, function() {
    console.log('hi nodemon')
})

app.get('login', function(req,res) {
    res.send('asd')
})