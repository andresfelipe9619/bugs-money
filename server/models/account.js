const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let naturalezasValidas = {
  values: ['DEBITO', 'CREDITO'],
  message: '{VALUE} No es una naturaleza de cuenta valida',
};

let Schema = mongoose.Schema;

let cuentaSchema = new Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre de la cuenta es necesario'],
  },
  numeroCuenta: {
    type: Number,
    unique: true,
    required: [true, 'El numero de la cuenta es necesario'],
  },
  naturalezaCuenta: {
    type: String,
    required: [true, 'La naturaleza de la cuenta es necesario'],
    enum: naturalezasValidas,
  },
  estado: {
    type: Boolean,
    default: true,
  },
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
  presupuesto: {
    type: Schema.Types.ObjectId,
    ref: 'Presupuesto',
    required: [true, 'El presupuesto es necesario'],
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: [true, 'El usuario es necesario'],
  },
});

// cuentaSchema.methods.toJSON = function () {

//     let user = this;
//     let userObject = user.toObject();
//     delete userObject.password;

//     return userObject;

// }

cuentaSchema.plugin(uniqueValidator, {message: '{PATH} debe de ser unico'});
module.exports = mongoose.model('Cuenta', cuentaSchema);
