const express = require("express");
const app = express();
const routes = require("./routes/allRoutes");
const cors = require("cors"); 
const { dirname } = require("path");
const upload = require("express-fileupload");


// For Going To Live Server

//***********Live Server Start ********//
const root = require("path").join(__dirname, "build");
app.use(express.static(__dirname + "/assets"));
app.use(express.static(root));
//***********Live Server End ********
app.use(upload());
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());
app.use(routes);

app.get("*", (req,res)=>{
    res.sendFile("index.html",{root})
})



const port = process.env.PORT || 4545;
app.listen(port,()=>{
    console.log("server running",port);
})