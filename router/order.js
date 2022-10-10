const express = require("express") ;
const router = express.Router();
const fs = require("fs");
const app=express();


//app.use('/Stylesheet', express.static(__dirname + '/Stylesheet'));

app.get("/", function(req,res){
    res.send(fs.readFileSync('order.html').toString());
});

router.get("/page",function(req,res){
    res.json({message:"/order/page的路徑"});
});


// moudle[1] 將router倒出,等別人require引入使用
module.exports = router ;