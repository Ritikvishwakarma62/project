require("../config/db")
const mongoose = require("mongoose")
const SubCateSchema = mongoose.Schema({
    category : String,
    name : String
})

module.exports = mongoose.model("subcategory",SubCateSchema)