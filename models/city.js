require("../config/db");

const mongoose = require("mongoose");

const citySchema = mongoose.Schema({
    id : String,
    name :String,
    state : String
},{collection : "city"})

module.exports = mongoose.model("city",citySchema);