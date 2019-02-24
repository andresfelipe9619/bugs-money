const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let tipoValido = {
  values: ['GASTO', 'INGRESO', 'TRANSFERENCIA', 'INVERSION'],
  message: '{VALUE} No es un tipo de transaccion valida',
};

let Schema = mongoose.Schema;

let transactionSchema = new Schema({
  name: {
    type: String,
    required: [true, 'El name del transaccion es necesario'],
  },
  type: {
    type: String,
    required: [true, 'El tipo de la transaccion es necesario'],
    enum: tipoValido,
  },
  value: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  estado: {
    type: Boolean,
    default: true,
  },
  account: {
    type: Schema.Types.ObjectId,
    ref: 'Cuenta',
    required: [true, 'La account es requerida para realizar transaccion'],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'El user es requerido'],
  },
});

transactionSchema.plugin(uniqueValidator, {
  message: '{PATH} debe de ser unico',
});
module.exports = mongoose.model('Transaction', transactionSchema);
