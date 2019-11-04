const mongoose = require('mongoose');
//const bcrypt = require('bcrypt');
//const saltRounds = 10;
//Define a schema
const Schema = mongoose.Schema;
const CineSchema = new Schema({
        name: {
        type: String,
        trim: true,
        required: true,
    }      
});

module.exports = mongoose.model('Cine', CineSchema);