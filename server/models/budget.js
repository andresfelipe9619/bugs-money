const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const fakegoose = require('fakegoose');

let Schema = mongoose.Schema;

let budgetSchema = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre del presupuesto es necesario'],
  },
  limit: {
    type: Number,
    default: 0,
  },
  startDate: {
    type: Date,
    required: [true, 'la fecha inicial del presupuesto es necesario'],
  },
  endDate: {
    type: Date,
    required: [true, 'la fecha final del presupuesto es necesario'],
  },
  state: {
    type: Boolean,
    default: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'El usuario es requerido'],
  },
});

budgetSchema.plugin(fakegoose);
budgetSchema.plugin(uniqueValidator, {
  message: '{PATH} debe de ser unico',
});
module.exports = mongoose.model('Budget', budgetSchema);
