const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let localSchema = new Schema({
    title:  String,
    article: String,
});

let Locale = mongoose.model('Locale', localSchema);
module.exports = Locale;