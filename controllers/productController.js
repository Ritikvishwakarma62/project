const routes = require("express").Router()
const product = require("../models/product");
const path = require("path");
const uni = require("unique-string-generator");
const fs = require("fs");

routes.get("/", async (req, res) => {
    let result = await product.find();
    res.send({ success: true, result: result })
})

routes.get("/:id", async (req, res) => {
    let result = await product.find({ _id: req.params.id });
    res.send({ success: true, result: result[0] })
})

routes.post("/", async (req, res) => {
    let body = JSON.parse(req.body.formdata);
    let image = req.files.image;
     
    let arr = image.name.split(".");
    let ext = arr[arr.length-1];
    let new_name = uni.UniqueString()+"."+ext
    
    body.image = new_name;
    await image.mv(path.resolve() + "/assets/product-images/" +new_name);
    await product.create(body);
    res.send({ success: true });
})

routes.put("/:id", async (req, res) => {
    let result = await product.updateMany({ _id: req.params.id });
    res.send({ success: true, result: result[0] })
})

routes.delete("/:id", async (req, res) => {
    let result = await product.find({_id : req.params.id});
    let image = result[0].image;
    let imagepath = path.resolve()+"/assets/product-images/"+image;
    fs.unlinkSync(imagepath);

    await product.deleteMany({ _id: req.params.id });
    res.send({ success: true })
})

module.exports = routes;