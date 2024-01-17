const routes = require("express").Router();
const subcategory = require("../models/subCategory")

routes.get("/",async(req,res)=>{
let result= await subcategory.find();
 res.send({success : true, result :result});
})

routes.get("/:id",async(req,res)=>{
 let result = await subcategory.find({_id : req.params.id});
 res.send({success : true,result : result[0]});
})

routes.post("/",async(req,res)=>{
    await subcategory.create(req.body);
    res.send({success : true});
})

routes.put("/:id",async(req,res)=>{
    let result = await subcategory.updateMany({_id : req.params.id});
    res.send({success : true, result :result[0]})
})

routes.delete("/:id",async(req,res)=>{
    await subcategory.deleteMany({_id : req.params.id});
    res.send({success : true})
})

module.exports =routes;