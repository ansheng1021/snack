var express = require('express');
var router = express.Router();
var bodyParser =  require('body-parser');
var connection= require('../../config/db')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json());
router.get('/getdata',function (req,res) {
    let gid=req.query.gid
    connection.query('select * from goodslist where gid=?',[gid],function (err,result) {
        res.send(result)
    })
})
router.get('/getoneaddress',function (req,res) {
    let id=req.query.id
    connection.query('select * from address where id=?',[id],function (err,result) {
        res.send(result)
    })
})
router.post('/addorder',function (req,res) {
    console.log(req.body);

    let sql='insert into orders ('
    for(item in req.body){
       sql+=item+','
    }
    sql=sql.slice(0,-1)+ ') values ('
    for(let i in req.body){
        sql+= `'${req.body[i]}',`
    }
    sql= sql.slice(0,-1)+')';
    connection.query(sql,function (err,result) {
        if(result.affectedRows==1){
            res.send('success')
        }else {
            res.send('fail')
        }
    })
})

router.get('/getorders',function (req,res) {
    connection.query('select * from orders',function (error,result) {
        res.send(result)
    })
})

module.exports = router;