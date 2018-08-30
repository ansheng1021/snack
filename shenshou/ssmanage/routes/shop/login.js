var express = require('express');
var router = express.Router();
var bodyParser =  require('body-parser');
var connection= require('../../config/db')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json());

router.post('/check',function (req,res) {
    var {name,password}=req.body
    var statusobj={
        1:"审核通过",
        2:"审核未通过",
        3:"等待审核"
        }
    connection.query("select * from shop where phone=? and password=?",[name,password],function (err,result) {
        let status=result[0].status;

        let sid = result[0].sid
        if(result[0].status==1){
           res.json({status:'success',message:statusobj[status],sid:sid})
        }else {
            res.json({status:'fail',message:statusobj[status]})
        }
    })

})

module.exports = router;