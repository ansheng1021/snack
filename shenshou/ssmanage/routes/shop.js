var express = require('express');
var router = express.Router();
var admission= require('./shop/admission')
var login= require('./shop/login')
var  manage=require('./shop/manage')
var  goods=require('./shop/goods');
var  store=require('./shop/store');
router.use('/admission', admission);
router.use('/login',login);
router.use('/manage',manage)
router.use('/goods',goods)
router.use('/store',store)
module.exports = router;
