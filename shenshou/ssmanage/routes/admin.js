var express = require('express');
var router = express.Router();
var login= require('./admin/login')
var check= require('./admin/check')
var store=require('./admin/store')

router.use('/login', login);
router.use('/check', check);
router.use('/store', store);
module.exports = router;
