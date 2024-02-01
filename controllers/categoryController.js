const routes = require("express").Router();
const cate = require("../models/category");
const subcate = require("../models/subCategory");
const product = require("../models/product")

routes.get("/", async (req,res)=>{
    let result = await cate.find();
    res.send({success : true , result : result})
})

routes.get("/:id", async(req,res)=>{
    let result = await cate.find({_id : req.params.id});
    res.send({success : true ,result : result[0]})
})

routes.post("/", async (req,res)=>{
    await cate.create(req.body);
    res.send({success : true});
})

routes.put("/:id",async(req,res)=>{
    await cate.updateMany({_id : req.params.id},req.body);
    res.send({success : true })
})

routes.delete("/:id",async(req,res)=>{
    let result = await cate.find({_id : req.params.id})
    let cateName = result[0].name
    await product.deleteMany({category : cateName})
    await subcate.deleteMany({category : cateName})
    await cate.deleteMany({_id : req.params.id})
    res.send({success : true})
})



module.exports = routes;