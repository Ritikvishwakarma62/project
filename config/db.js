require("mongoose").connect("mongodb://0.0.0.0:27017/project").then(()=>{
    console.log("db connected");
}).catch((err)=>{
    console.log("db NOT---- connected",err);

});