const mongoose = require('mongoose')

const veggieSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        color: {type: String, required: true},
        canEat: Boolean
    }
);

module.exports = mongoose.model('Veggie', veggieSchema);
