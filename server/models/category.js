let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let categoriaSchema = new Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre de la categoria es necesario'],
  },
  precioCat: {
    type: Number,
    required: [true, 'El precio de la categoria es necesario'],
  },
  precioGstdo: {
    type: Number,
    default: 0,
  },
  descripcion: {
    type: String,
    required: false,
  },
  presupuesto: {
    type: Schema.Types.ObjectId,
    ref: 'Presupuesto',
    required: [true, 'El presupuesto es necesario'],
  },
  usuario: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
  },
});

module.exports = mongoose.model('Categoria', categoriaSchema);
