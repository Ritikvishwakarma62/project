const routes = require("express").Router();
const subcategory = require("../models/subCategory");
const product = require("../models/product");

routes.get("/", async (req, res) => {
    let result = await subcategory.find();
    res.send({ success: true, result: result });
})

routes.get("/subcate/:catename",async(req,res)=>{
    let result = await subcategory.find({category : req.params.catename});
    res.send({success : true, result : result})
})

routes.get("/:id", async (req, res) => {
    let result = await subcategory.find({ _id: req.params.id });
    res.send({ success: true, result: result[0] });
})

routes.post("/", async (req, res) => {
    await subcategory.create(req.body);
    res.send({ success: true });
})

routes.put("/:id", async (req, res) => {
    let result = await subcategory.updateMany({ _id: req.params.id });
    res.send({ success: true, result: result[0] })
})

routes.delete("/:id", async (req, res) => {
    let result = await subcategory.find({_id : req.params.id});
    let subCate = result[0].name;
    await product.deleteMany({subcategory : subCate});
    await subcategory.deleteMany({ _id: req.params.id });
    res.send({ success: true })
})

module.exports = routes;