var express = require('express');
var router = express.Router();
var bodyParser =  require('body-parser');
var connection= require('../../config/db')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json());
router.get('/getperson')



router.get('/getperson',function (req,res) {
    let uid=req.query.uid
    connection.query('select * from user where uid=?',[uid],function (error,result) {
        res.send(result)
    })
})
router.get('/cz',function (req,res) {
    let uid=req.query.uid
    let price=req.query.money
    connection.query('UPDATE user SET money =? WHERE uid = ?;',[price,uid],function (error,result) {
        if (result.affectedRows==1) {
            res.send('success')
        }else{
            res.send('fail')
        }
    })
})
router.get('/givemoney',function (req,res) {
    let uid=req.query.uid
    let price=req.query.money
    let gold=req.query.gold
    connection.query('UPDATE user SET money =?,gold=? WHERE uid = ?;',[price,gold,uid],function (error,result) {
        if (result.affectedRows==1) {
            res.send('success')
        }else{
            res.send('fail')
        }
    })
})






module.exports = router;