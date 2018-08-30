var express = require('express');
var router = express.Router();
var bodyParser =  require('body-parser');
var connection= require('../../config/db')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json());

router.post('/check',function (req,res) {
   var {name,password}=req.body
    connection.query("select * from manage where username=? and password=?",[name,password],function (err,result) {
        if(result.length>0){
            res.send('success')
        }else {
            res.send('fail')
        }
    })

})

module.exports = router;