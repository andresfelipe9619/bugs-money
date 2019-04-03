const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let validType = {
  values: ['EXPENSE', 'INCOME', 'TRANSFER', 'INVEST'],
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
    enum: validType,
  },
  value: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  state: {
    type: Boolean,
    default: true,
  },
  account: {
    type: Schema.Types.ObjectId,
    ref: 'Account',
    required: [true, 'La account es requerida para realizar transaccion'],
  },
  budget: {
    type: Schema.Types.ObjectId,
    ref: 'Budget',
    required: [true, 'La budget es requerida para realizar transaccion'],
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
