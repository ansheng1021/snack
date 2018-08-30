var express = require('express');
var router = express.Router();
var bodyParser =  require('body-parser');
var connection= require('../../config/db')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json());
router.get('/getinformation',function (req,res) {
    let sid=req.query.sid
    connection.query("select * from shop where sid=?",[sid],function (err,result) {

        res.json(result[0])
    })
})
router.post('/update',function (req,res) {
    let sid=req.body.sid
    let sql ="update shop set "
    for(i in req.body){
        if(i!="time") {
            sql += i + '=' + `'${req.body[i]}',`
        }
    }
    sql=sql.slice(0,-1)+ ' where sid='+sid
    connection.query(sql,function (err,result) {
        if(result.affectedRows==1){
            res.send("success")
        }else{
            res.send("fail")
        }
    })
})
// router.get('/categorydelete',function (req,res) {
//     let cid=req.query.cid
//     connection.query("delete from category where cid=?",[cid],function (err,result) {
//         if ( result.affectedRows==1){
//             res.send('success')
//         }else{
//             res.send('fail')
//         }
//     })
// })
module.exports = router;