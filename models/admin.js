require("../config/db");
const mongoose = require("mongoose");

module.exports = mongoose.model("admin" ,mongoose.Schema({
    username : String,
    password : String
}))
