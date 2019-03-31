const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let validNatures = {
  values: ['DEBITO', 'CREDITO'],
  message: '{VALUE} No es una naturaleza de cuenta valida',
};

let Schema = mongoose.Schema;

let accountSchema = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre de la cuenta es necesario'],
  },
  accountNumber: {
    type: Number,
    unique: true,
    required: [true, 'El numero de la cuenta es necesario'],
  },
  nature: {
    type: String,
    required: [true, 'La naturaleza de la cuenta es necesario'],
    enum: validNatures,
  },
  state: {
    type: Boolean,
    default: true,
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  value: {
    type: Number,
    default: 0,
  },
  // budget: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Budget',
  //   // required: [true, 'El budget es necesario'],
  // },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'El usuario es necesario'],
  },
});

accountSchema.plugin(uniqueValidator, {message: '{PATH} debe de ser unico'});
module.exports = mongoose.model('Account', accountSchema);
