var path= require("path");
var express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload');

var PORT= process.env.PORT||3000;

mongoose.connect('mongodb+srv://maple55:Yfr7d6XNWT3swbM@cluster0-wdtm5.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

const product = require('./routes/user.route');
var app = express();
app.use(express.static(path.join(__dirname, '/public')));
//rutas de usuarios

//ejs
app.set('view engine', 'ejs');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("conectado")
});
app.use(fileUpload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/', product);


app.listen(PORT, function () {
  console.log('Example app listening on port 3000!');
});
