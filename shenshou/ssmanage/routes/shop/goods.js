var express = require('express');
var router = express.Router();
var bodyParser =  require('body-parser');
var connection= require('../../config/db')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json());
router.get('/categoryquery',function (req,res) {
    connection.query("select * from category where pid=0",function (err,result) {
        res.json(result)
    })
})
router.get('/categoryquery2',function (req,res) {
    let pid=req.query.pid
    connection.query("select * from category where pid=?",[pid],function (err,result) {
        res.json(result)
    })
})
router.get('/goodsquery',function (req,res) {
    let page=req.query.page;
    connection.query("select * from goodslist ",function (err,result) {
        let total=result.length;
        let data=result.slice((page-1)*3,page*3)
        res.json({total,data})
    })
})
router.get('/getgoodslist',function (req,res) {
    let gid=req.query.gid
    connection.query("select * from goodslist where gid=?",[gid],function (err,result) {

        res.json(result[0])
    })
})
router.post('/goodsadd',function (req,res) {
    let sql ="insert into goodslist ("
    for(i in req.body){
            sql+= i+','

    }
    sql=sql.slice(0,-1)+ ') values ('
    for(let i in req.body){
            sql += `'${req.body[i]}',`
    }
    sql= sql.slice(0,-1)+')';
    console.log(sql);
    connection.query(sql,function (err,result) {
        if(result.affectedRows==1){
            res.send("success")
        }else{
            res.send("fail")
        }
    })
})
router.post('/updategoodslist',function (req,res) {
    let gid=req.body.gid
    let sql ="update goodslist set "
    for(i in req.body){
            sql+= i+'='+`'${req.body[i]}',`

    }
    sql=sql.slice(0,-1)+ ' where gid='+gid

    connection.query(sql,function (err,result) {
        if(result.affectedRows==1){
            res.send("success")
        }else{
            res.send("fail")
        }
    })
})
router.get('/goodsdelete',function (req,res) {
    let gid=req.query.gid
    console.log(gid);
    connection.query("delete from goodslist where gid=?",[gid],function (err,result) {
        if ( result.affectedRows==1){
            res.send('success')
        }else{
            res.send('fail')
        }
    })
})
module.exports = router;


