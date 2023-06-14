const mongoose = require('mongoose')



const veggieSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        color: {type: String, required: true},
        canEat: Boolean
    }
);

const Veggies = mongoose.model('Veggie', veggieSchema);

module.exports = Veggies;