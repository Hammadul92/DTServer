const mongoose = require('mongoose');
const { Schema } = mongoose; // Similar to const Schema = mongoose.Schema

const userSchema = new Schema({
    googleId: String,
    firstName: String,
    lastName: String,
    companyName: String,
    email: String,
    passwordHash: String
})

mongoose.model('users', userSchema)