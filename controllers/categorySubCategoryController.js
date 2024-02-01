const routes = require("express").Router()
const cate = require("../models/category")
const subCate = require("../models/subCategory")

routes.get("/" ,async(req,res)=>{
let result_cate = await cate.find();
let result = await Promise.all(result_cate.map(async(value)=>{
    let catename = value.name;
    let result_subcate = await subCate.find({category : catename})
    let obj = {_id : value._id , name : value.name , subcategory:result_subcate}
    return obj
})
)
res.send(result)

})

module.exports = routes;