require("../config/db");

const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    repassword: String,
    state: String,
    city:String,
    address: String,
    gender: String,
    contact: String
});

module.exports = mongoose.model("user", userSchema);