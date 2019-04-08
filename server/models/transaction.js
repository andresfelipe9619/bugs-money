const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const CategoryModel = require('./category');
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
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: [true, 'La category es requerida para realizar transaccion'],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'El user es requerido'],
  },
});
transactionSchema.post('save', (transaction) => {
  let {value, category, type} = transaction;
  CategoryModel.findById(category, (err, categoryDB) => {
    if (err) {
      console.error({
        ok: false,
        err,
      });
    }

    if (!categoryDB) {
      console.error({
        ok: false,
        err: {
          message: 'No se encontro el id category',
        },
      });
    }

    categoryDB.spent = type === 'EXPENSE' ?
      categoryDB.spent - value : type === 'INCOME' ?
        categoryDB.spent + value : categoryDB.spent;

    categoryDB.save((err, categoriaGuardada) => {
      if (err) {
        console.error({
          ok: false,
          err,
        });
      }

      console.log({
        ok: true,
        category: categoriaGuardada,
      });
    });
  });
});
transactionSchema.plugin(uniqueValidator, {
  message: '{PATH} debe de ser unico',
});
module.exports = mongoose.model('Transaction', transactionSchema);
