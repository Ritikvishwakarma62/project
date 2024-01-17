require("../config/db");

const mongoose = require("mongoose");
const cateSchema = mongoose.Schema({
    name : String,
})

module.exports = mongoose.model("category", cateSchema)