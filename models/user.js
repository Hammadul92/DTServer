const mongoose = require('mongoose');
const { Schema } = mongoose; // Similar to const Schema = mongoose.Schema

const userSchema = new Schema({
    isAdmin: Boolean,
    firstName: String,
    lastName: String,
    companyName: String,
    email: String,
    passwordHash: String,
    date: Date,
    lastLogin: Date,
})

mongoose.model('users', userSchema)