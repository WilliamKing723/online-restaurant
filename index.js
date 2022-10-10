const express=require ("express") ;
const app=express();
const portNum = 1234;
const fs = require("fs");


const feedbackRouter = require("./router/feedback.js");
const orderRouter = require("./router/order.js");
const productpriceRouter = require("./router/productprice.js");

app.use('/Img', express.static(__dirname + '/Img'));
app.use('/Stylesheet', express.static(__dirname + '/Stylesheet'));

app.get("/", function(req,res){
    res.send(fs.readFileSync('index.html').toString());
});



app.use("/feedback", feedbackRouter);
app.use("/order", orderRouter);
app.use("/productprice", productpriceRouter);


app.listen(portNum,function(){
    console.log(`Server running at http://localhost:${portNum}/`);
});

module.exports=app;