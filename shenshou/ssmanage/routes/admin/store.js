var express = require('express');
var router = express.Router();
var bodyParser =  require('body-parser');
var connection= require('../../config/db')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json());
router.get('/getdata',function (req,res) {
    connection.query("select * from shop ",function (err,result) {
        res.json(result)
    })
})
// router.post('/update',function (req,res) {
//     let sid=req.body.sid
//     let sql ="update shop set "
//     for(i in req.body){
//         if(i!="time") {
//             sql += i + '=' + `'${req.body[i]}',`
//         }
//     }
//     sql=sql.slice(0,-1)+ ' where sid='+sid
//     connection.query(sql,function (err,result) {
//         if(result.affectedRows==1){
//             res.send("success")
//         }else{
//             res.send("fail")
//         }
//     })
// })

module.exports = router;