require("../config/db")
const mongoose = require("mongoose")
const proSchema = mongoose.Schema({
    title : String,
    category : String,
    subcategory : String,
    price : Number,
    discount: Number,
    detail : String,
    quantity : Number,
    image : String
    
})

module.exports = mongoose.model("product",proSchema)