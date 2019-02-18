const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let tipoValido = {
  values: ['GASTO', 'INGRESO', 'TRANSFERENCIA', 'INVERSION'],
  message: '{VALUE} No es un tipo de transaccion valida',
};

let Schema = mongoose.Schema;

let transaccionSchema = new Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre del transaccion es necesario'],
  },
  tipoTransaccion: {
    type: String,
    required: [true, 'El tipo de la transaccion es necesario'],
    enum: tipoValido,
  },
  valorTransaccion: {
    type: Number,
    required: true,
  },
  fechaTransaccion: {
    type: Date,
    default: Date.now,
  },
  estado: {
    type: Boolean,
    default: true,
  },
  cuenta: {
    type: Schema.Types.ObjectId,
    ref: 'Cuenta',
    required: [true, 'La cuenta es requerida para realizar transaccion'],
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: [true, 'El usuario es requerido'],
  },
});

// transaccionSchema.methods.toJSON = function () {

//     let user = this;
//     let userObject = user.toObject();
//     delete userObject.valortransaccion;

//      return userObject;

//  }

transaccionSchema.plugin(uniqueValidator, {
  message: '{PATH} debe de ser unico',
});
module.exports = mongoose.model('Transaccion', transaccionSchema);
