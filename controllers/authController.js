const routes = require("express").Router();
const user = require("../models/users");
const sha1 = require("sha1");
const jwt = require("jsonwebtoken")

routes.post("/", async (req,res)=>{
    let { email , password} = req.body;
    let result = await user.find({email : email});
    if(result.length == 1){
        if(result[0].password == sha1(password )){
            let obj = { _id : result[0]._id };
            let token = jwt.sign(obj, "form token");
            res.send({success : true, token : token})
        }
        else{
            res.send({success : false, type : 2 })
        }
    }
    else{
        res.send({success : false, type : 1})
    }
})

module.exports = routes