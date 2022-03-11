const mongoose = require('./connection')

////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////

const { Schema, model } = mongoose;

const barSchema = new Schema ({
    name: String,
    color: String,
    readyToEat: Boolean,
    username: String
})

const Fruit = model('Fruit', fruitSchema);

module.exports = Fruit;