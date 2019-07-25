const mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    Nombre: String,
    Apellido: String,
    Foto: String,
    Sexo: String,
  });


// Export the model
module.exports = mongoose.model('User', UserSchema);