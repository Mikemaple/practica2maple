//const User = require("../models/user.model.js");
var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
  Nombre: String,
  Apellido: String,
  Foto: String,
  Sexo: String,
});

exports.test = function(req, res) {
  res.send("Greetings   Test controller!");
};

exports.product_create = function(req, res) {
  let sampleFile = req.files.Foto;
  var users = mongoose.model('users', UserSchema);
  let user = new users(req.body);
  user.Foto=sampleFile.name;
  sampleFile.mv('./public/'+user.Foto, function(err) {
    if (err)
      return res.status(500).send(err);
    });
  user.save(function(err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};

exports.product_create2 = function(req, res) {
  res.render("../views/pages/create.ejs");
};

exports.listAll=function(req,res){
  var users = mongoose.model('users', UserSchema);
  users.find(function (err, data) {
    console.log(data);
    if (err) return console.error(err);
    console.log(data);
    res.render("../views/pages/index.ejs", {usuarios: data});
  });
};

exports.product_details = function (req, res) {
  var users = mongoose.model('users', UserSchema);
  users.findById(req.params.id, function (err, data) {
      if (err) return next(err);
      res.render("../views/pages/Edit.ejs", {usuarios: data});
  })
};

exports.product_delete = function (req, res) {
  var users = mongoose.model('users', UserSchema);
  users.findByIdAndRemove(req.params.id, function (err) {
      if (err) return next(err);
      res.redirect("/");
  })
};

exports.product_update = function (req, res) {
  //let sampleFile = req.files.Foto2;
  if(req.body.subir==2){
    let sampleFile = req.files.Foto2;
    sampleFile.mv('./public/'+req.files.Foto2.name, function(err) {
      if (err)
        return res.status(500).send(err);
      });
      req.body.Foto=sampleFile.name;
  }
  var users = mongoose.model('users', UserSchema);
  users.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err) {
      if (err) return next(err);
      res.redirect("/");
  });
};