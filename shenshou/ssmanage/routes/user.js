var express = require('express');
var router = express.Router();
var index=require('./user/index');
var login=require('./user/login');
var order=require('./user/order');
var person=require('./user/person')
/* GET users listing. */
router.use('/index',index)
router.use('/login',login)
router.use('/order',order)
router.use('/person',person)
module.exports = router;
