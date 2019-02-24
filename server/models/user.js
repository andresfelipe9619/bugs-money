const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
  name: {
    type: String,
    required: [true, 'El name es necesario'],
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'El correo es necesario'],
  },
  password: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: false,
  },
  state: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

usuarioSchema.methods.toJSON = function() {
  let user = this;
  let userObject = user.toObject();
  delete userObject.password;

  return userObject;
};

usuarioSchema.plugin(uniqueValidator, {message: '{PATH} debe de ser unico'});
module.exports = mongoose.model('User', usuarioSchema);
