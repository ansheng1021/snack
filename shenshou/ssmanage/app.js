var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs')
var indexRouter = require('./routes/index');
var admin = require('./routes/admin');
var shop = require('./routes/shop')
var user = require('./routes/user')

var app = express();
var multer = require('multer')
var upload = multer({
    dest:'./uploads'
})
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname,'uploads')));
app.use('/', indexRouter);
app.use('/admin', admin);
app.use('/shop',shop);
app.use('/user',user);

app.post('/uploadimg',upload.single('file'),function (req,res) {
    let file=req.file;
    let date = new Date();
    let dirname=[date.getFullYear(),date.getMonth()+1,date.getDate()].join('-');
    let pathname=__dirname+'/uploads/'+dirname;
    if(!fs.existsSync(pathname)){
        fs.mkdirSync(pathname);
    }
    let filename=''+ date.getTime()+Math.floor(Math.random()*100)+'.'+file.originalname.split('.')[1];
    fs.readFile(file.path,function (err,data) {
        fs.writeFile(pathname+'/'+filename,data,function (err) {
            fs.unlinkSync(file.path);
            res.send('/'+dirname+'/'+filename);
        })
    })
})
// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
