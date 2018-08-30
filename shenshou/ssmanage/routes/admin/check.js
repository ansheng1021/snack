var express = require('express');
var router = express.Router();
var bodyParser =  require('body-parser');
var connection= require('../../config/db');
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json());


router.get('/shoplist',function (req,res) {
    let status=req.query.status;
    let page=req.query.page;
    let search=req.query.search
    connection.query(`select * from shop where status=${status} and name like '%${search}%' `,function (err,result) {
        let total=result.length;
        let data=result.slice((page-1)*3,page*3)
        res.json({total,data})
    })

})


router.get('/delete',function (req,res) {
    let sid=req.query.sid;
    connection.query("delete from shop where sid=?",[sid],function (err,result) {
      if (result.affectedRows==1){
           res.send('success')
       } else {
          res.send('fail')
      }
    })

})
router.get('/getone',function (req,res) {
    let sid=req.query.sid;
    connection.query("select * from shop where sid=?",[sid],function (err,result) {
        res.json(result[0])
    })
})
router.get('/update',function (req,res) {
    let sid=req.query.sid;
    let status=req.query.status;
 connection.query("update shop set status=? where sid=?",[status,sid],function (err,result) {
     if (result.affectedRows==1){
         res.send("success")
     } else{
         res.send("fail")
     }
 })
})
module.exports = router;