const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const fakegoose = require('fakegoose');

let Schema = mongoose.Schema;

let presupuestoSchema = new Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre del presupuesto es necesario'],
  },
  valorPresupuesto: {
    type: Number,
    default: 0,
  },
  fechaInicioPresupuesto: {
    type: Date,
    required: [true, 'la fecha inicial del presupuesto es necesario'],
  },
  fechaFinPresupuesto: {
    type: Date,
    required: [true, 'la fecha final del presupuesto es necesario'],
  },
  estado: {
    type: Boolean,
    default: true,
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: [true, 'El usuario es requerido'],
  },
});

// presupuestoSchema.methods.toJSON = function () {

//     let user = this;
//     let userObject = user.toObject();
//     delete userObject.valorPresupuesto;

//      return userObject;

//  }

presupuestoSchema.plugin(fakegoose);
presupuestoSchema.plugin(uniqueValidator, {
  message: '{PATH} debe de ser unico',
});
module.exports = mongoose.model('Presupuesto', presupuestoSchema);
