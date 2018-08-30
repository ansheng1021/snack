var express = require('express');
var router = express.Router();
var bodyParser =  require('body-parser');
var connection= require('../../config/db')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json());

router.post('/',function (req,res) {
    let sql="insert into shop  ("
    for(let i in req.body){
        sql+=i+','

    }
    sql=sql.slice(0,-1)+ ') values ('
    for(let i in req.body){
        sql+= `'${req.body[i]}',`
    }
    sql= sql.slice(0,-1)+')';
    console.log(sql);
    connection.query(sql,function (err,result) {
        if(result.affectedRows==1){
            res.send('success')
        }else {
            res.send('fail')
        }
    })

})

module.exports = router;