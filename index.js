const express=require ("express") ;
const app=express();
const portNum = 1234;
const fs = require("fs");


const feedbackRouter = require("./router/feedbackRouter.js");
const orderRouter = require("./router/orderRouter.js");
const productpriceRouter = require("./router/productpriceRouter.js");

app.use('/Img', express.static(__dirname + '/Img'));
app.use('/Stylesheet', express.static(__dirname + '/Stylesheet'));
app.use('/index.html', express.static(__dirname + "/index.html"));
app.use('/Order', express.static(__dirname + "/Order"));
app.use('/Feedback', express.static(__dirname + "/Feedback"));
app.use('/Productprice', express.static(__dirname + "/Productprice"));
app.use('/Payment', express.static(__dirname + "/Payment"));
app.use('/takeMeal', express.static(__dirname + "/takeMeal"));


app.get("/", function(req,res){
    res.send(fs.readFileSync('index.html').toString());
});



app.use("/feedbackRouter.js", feedbackRouter);
app.use("/orderRouter.js", orderRouter);
app.use("/productpriceRouter.js", productpriceRouter);


app.listen(portNum,function(){
    console.log(`Server running at http://localhost:${portNum}/`);
});

module.exports=app;


