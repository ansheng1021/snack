var express = require('express');
var router = express.Router();
var bodyParser =  require('body-parser');
var connection= require('../../config/db')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json());
router.get('/classfiy',function (req,res) {
    connection.query('select * from category',function (err,result) {
        res.send(result)
    })
})
router.get('/categoryquery',function (req,res) {
    let page=req.query.page;
    connection.query("select * from category",function (err,result) {
        let total=result.length;
        let data=result.slice((page-1)*3,page*3)
        res.json({total,data})
    })
})
router.post('/categoryadd',function (req,res) {
    var {cname,pid}=req.body
    connection.query("insert into category (cname,pid) values (?,?)",[cname,pid],function (err,result) {
        if (result.affectedRows==1){

            res.send("success")
        } else{
            res.send("fail")
        }
    })
})
router.get('/categorydelete',function (req,res) {
    let cid=req.query.cid
    connection.query("delete from category where cid=?",[cid],function (err,result) {
        if ( result.affectedRows==1){
            res.send('success')
        }else{
            res.send('fail')
        }
    })
})
module.exports = router;