const mongoose = require('mongoose');
const { Schema } = mongoose; // Similar to const Schema = mongoose.Schema

const subscriberSchema = new Schema({
    email: String,
    date: Date
})

mongoose.model('subscribers', subscriberSchema)