let mongoose = require('mongoose');
let Schema = mongoose.Schema;

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

module.exports = mongoose.model('Category', categorySchema);
