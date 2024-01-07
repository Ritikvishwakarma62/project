const router = require("express").Router();
const jwt = require("jsonwebtoken");
const user = require("../models/users");

router.get("/", async(req,res)=>{
    let token = req.headers.authorization;
    let obj = jwt.decode(token, "form token");
    let _id = obj._id;

    let result = await user.find({_id : _id});
    res.send({success : true, result : result[0] })
} )

module.exports = router;