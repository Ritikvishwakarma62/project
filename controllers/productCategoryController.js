const routes = require('express').Router()
const product = require("../models/product");

routes.get("/category/:catename",async(req,res)=>{
    let result = await product.find({category:req.params.catename});
    res.send({success:true,result:result});
})

module.exports= routes;
