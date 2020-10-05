const mongoose = require('mongoose');
const { Schema } = mongoose; // Similar to const Schema = mongoose.Schema

const contactSchema = new Schema({
    email: String,
    date: Date
})

mongoose.model('contact', contactSchema)