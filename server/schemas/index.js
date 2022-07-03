const mongoose = require('mongoose');
const config = require('../config/config')


module.exports = () => {
    const connect = () => {
        mongoose.connect(config.db.host, function(err) {
            if(err) {
                console.log('mongodb connection error', err);
            }
            console.log('mongodb connected');
        })
    }
    connect();
    mongoose.connection.on('disconnected', connect);
    require('./user')
    require('./post')
}