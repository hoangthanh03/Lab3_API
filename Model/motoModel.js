const mongoose = require('mongoose');
const motoSchema = new mongoose.Schema({
    motoName: {
        type: String,
        require: true
    },
    date: {
        type: Number,
       
    },
    theFirm: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    }
});

const moto = mongoose.model('motors',motoSchema);
module.exports = moto;