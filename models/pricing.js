const mongoose = require('./connection')

////////////////////////////////////////////////
// Our Models
////////////////////////////////////////////////

const { Schema, model } = mongoose;

const pricingSchema = new Schema ({
    name: String,
    price: Number,
    featureOne: String,
    featureTwo: String,
    featureThree: String,
    featureFour: String
})

const Pricing = model('Pricing', pricingSchema);

module.exports = Pricing;