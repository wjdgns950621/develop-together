const dotenv = require('dotenv');
dotenv.config();

function required(key, defaultValue = undefined) {
    const value = process.env[key] || defaultValue;
    if(value == null) {
        throw new Error(`Key ${key} is undefined`);
    }
    return value;
}

const config = {
    db: {
        host: required('DB_HOST'),
    },
    host: {
        port: parseInt(required('HOST_PORT', 8080))
    }
}

module.exports = config