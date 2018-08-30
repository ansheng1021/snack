var express = require('express');
var router = express.Router();
var bodyParser =  require('body-parser');
var connection= require('../../config/db')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json());


router.get('/',function (req,res) {
     connection.query('select * from goodslist order by gid asc limit 0,3',function (err,result) {

         res.json(result)
     })

})
router.get('/getgoods',function (req,res) {
    let cid=req.query.cid
    let page=req.query.page
    let start=(page-1)*3,end=page*3
    connection.query("select goodslist.*,shop.shopname from goodslist,shop where h1=? and goodslist.sid=shop.sid",[cid],function (err,result) {
        let total=Math.ceil(result.length/3);
        let list =result.slice(start,end)
        res.send({total,list})
    })

})
router.get('/menu',function (req,res) {
    connection.query("select * from category",function (err,result) {
        let category=tree(result)
        function tree(category){
            let map={};
            category.forEach(element=>map[element.cid]=element);
            let value=[];
            category.forEach(element=>{
                let pid = element.pid;
                let parent = map[pid];
                if(parent){
                    if(!parent.children){
                        parent.children=[];
                    }
                    parent.children.push(element);
                }else {
                    value.push(element);
                }
            });
            return value;
        }
        res.json(category)
        })


})
router.get('/getgoodsone',function (req,res) {
    let gid=req.query.gid
    connection.query("select goodslist.*,shop.shopname from goodslist,shop where gid=? and goodslist.sid=shop.sid",[gid],function (err,result) {
        res.json(result[0])
    })
})
router.get('/getaddress',function (req,res) {
    connection.query("select * from address",function (err,result) {
        res.send(result)
    })
})
router.get('/updateaddress',function (req,res) {
    let id=req.query.id
    let flag=req.query.flag
    if (flag==1){
        flag=0
    } else{
        flag=1
    }
    connection.query("update address set flag=0;update address set flag=? where id=?",[flag,id],function (err,result) {;

        if (result[0].affectedRows && result[1].affectedRows==1){
            res.send("success")
        }else{
            res.send("fail")
        }

    })
})




router.get('/getshopgoods',function (req,res) {
    let sid=req.query.sid
    let page=req.query.page
    let start=(page-1)*3,end=page*3
    connection.query("select * from shop where sid=?;select goodslist.*,shop.shopname from goodslist,shop where goodslist.sid=? and putaway='true' and goodslist.sid=shop.sid",[sid,sid],function (err,result) {
        let shopinfor=result[0][0]
        let total=Math.ceil(result[1].length/3);
        let shopgoods=result[1].slice(start,end)
        res.json({total,shopinfor,shopgoods})
    })
})
router.post('/addaddress',function (req,res) {
    let {name,phone,address,uid}=req.body
    connection.query('insert into address (name,phone,address,uid) values(?,?,?,?)',[name,phone,address,uid],function (err,result) {
        if(result.affectedRows==1){
            res.send('success')
        }else{
            res.send('fail')
        }

    })
})
router.get('/deletsaddress',function (req,res) {
    let id=req.query.id
    connection.query('DELETE FROM address WHERE id = ?',[id],function (err,result) {
        if (result.affectedRows==1){
            res.send('success')
        } else{
            res.send('fail')
        }
    })
})









module.exports = router;