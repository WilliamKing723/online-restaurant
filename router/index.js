const express=require ("express") ;
const app=express();
const portNum = 1234;


const feedbackRouter = require("./feedback.js");
const orderRouter = require("./order.js");
const productpriceRouter = require("./productprice.js");

app.get("/", function(req,res){
    res.send("Hello, World");
});


app.use("/feedback", feedbackRouter);
app.use("/order", orderRouter);
app.use("/productprice", productpriceRouter);


app.listen(portNum,function(){
    console.log(`Server running at http://localhost:${portNum}/`);
});

module.exports=app;