const express = require("express") ;
const router = express.Router();


router.get("/",function(req,res){
    res.send("/order的路徑");
});

router.get("/page",function(req,res){
    res.json({message:"/order/page的路徑"});
});


// moudle[1] 將router倒出,等別人require引入使用
module.exports = router ;