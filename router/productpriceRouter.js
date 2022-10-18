const express = require("express") ;
const router = express.Router();
const fs = require("fs");
const app=express();


router.get("/", function(req,res){
    res.send(fs.readFileSync('../Productprice/productprice.html').toString());
});



// moudle[1] 將router導出,等別人require引入使用
module.exports = router ;