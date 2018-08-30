var express = require('express');
var router = express.Router();
var bodyParser =  require('body-parser');
var connection= require('../../config/db')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json());
router.post('/sign',function (req,res) {
    let sql ="insert into user ("
    for(i in req.body){
        sql+= i+','

    }
    sql=sql.slice(0,-1)+ ') values ('
    for(let i in req.body){
        sql += `'${req.body[i]}',`
    }
    sql= sql.slice(0,-1)+')';
    connection.query(sql,function (err,result) {
        if (result.affectedRows==1){
            res.send('success')
        } else{
            res.send('fail')
        }
    })
});


router.post('/check',function (req,res) {
    let {phone,password}=req.body
    connection.query("select * from user where phone=? and password=?",[phone,password],function (err,result) {

        if (result.length) {
            res.send(result)
        } else {
            res.send('fail')
        }
    })

})




module.exports = router;
