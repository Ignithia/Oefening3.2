//gegevens van json worden hierin weergegeven
const mongoose = require('mongoose'); //importing mongoose

const CampusSchema = new mongoose.Schema({
    name: {type: String},
    location: {type: String},
    adress: {type: String},
    image: {type: String}
}, {
    collection:`Campus` //naam collection
});

module.exports = mongoose.model('Campus', CampusSchema); //'Campus' naam dat we gebruiken in applicatie 