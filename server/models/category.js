let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let BudgetModel = './budget.js';
let categorySchema = new Schema({
  name: {
    type: String,
    required: [true, 'El name de la categoria es necesario'],
  },
  value: {
    type: Number,
    required: [true, 'El precio de la categoria es necesario'],
  },
  spent: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    required: false,
  },
  budget: {
    type: Schema.Types.ObjectId,
    ref: 'Budget',
    required: [true, 'El budget es necesario'],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const updateBudget = (category) => {
  let {spent, budget} = category;
  BudgetModel.findById(budget, (err, budgetDB) => {
    if (err) {
      return console.error({
        ok: false,
        err,
      });
    }

    if (!budgetDB) {
      return console.error({
        ok: false,
        err: {
          message: 'No se encontro el id category',
        },
      });
    }

    budgetDB.spent =
      budgetDB.spent + spent;
    budgetDB.save((err, budgets) => {
      if (err) {
        return console.error({
          ok: false,
          err,
        });
      }

      return console.log({
        ok: true,
        category: budgets,
      });
    });
  });
};

// categorySchema.post('save', updateBudget);
// categorySchema.post('remove', updateBudget);

module.exports = mongoose.model('Category', categorySchema);
