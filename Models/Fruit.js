/* eslint-disable no-undef */
const mongoose = require('mongoose')



const fruitSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        age: {type: Number, required: true},
        canEat: Boolean
    }
);

module.exports = mongoose.model('Fruit', fruitSchema);

