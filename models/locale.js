const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let localSchema = new Schema({
    language:  String,
    title:  String,
    article: String,
    menu: [String]
});

const Locale = mongoose.model('Locale', localSchema);
module.exports = Locale;