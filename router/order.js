const express = require("express") ;
const router = express.Router();
const fs = require("fs");
const app=express();

router.get("/", function(req,res){
    res.send(fs.readFileSync('../Order/order.html').toString());
});

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
})

// moudle[1] 將router導出,等別人require引入使用
module.exports = router ;