const router = require('express').Router();

const _ = require('underscore');

const Transaccion = require('../../models/transaction');

const {verificaToken} = require('../../middlewares/authentication');

// ===========================//
// Muestra todas las transacciones
// ===========================//
router.get('/transaccion', verificaToken, (req, res) => {
  let desde = req.query.desde || 0;
  desde = Number(desde);

  let limite = req.query.limite || 5;
  limite = Number(limite);

  Transaccion.find({})
      .sort('descripcion')
      .skip(desde)
      .limit(limite)
      .populate('usuario', 'nombre email')
      .populate('cuenta', 'nombre numeroCuenta')
      .exec((err, transacciones) => {
        if (err) {
          return res.status(500).json({
            ok: false,
            err,
          });
        }

        res.json({
          ok: true,
          transacciones,
        });
      });
});
// ===========================//
// Muestra la transaccion por ID
// ===========================//
router.get('/transaccion/:id', verificaToken, (req, res) => {
  let id = req.params.id;

  Transaccion.findById(id)
      .populate('usuario', 'nombre email')
      .populate('cuenta', 'nombre numeroCuenta')
      .exec((err, transaccionDB) => {
        if (err) {
          return res.status(500).json({
            ok: false,
            err,
          });
        }

        if (!transaccionDB) {
          return res.status(400).json({
            ok: false,
            err: {
              message: 'El id de la transaccion no es valido',
            },
          });
        }

        res.json({
          ok: true,
          transaccion: transaccionDB,
        });
      });
});

// ===========================//
// Crea una transaccion
// ===========================//

router.post('/transaccion', verificaToken, function(req, res) {
  let body = req.body;

  let transaccion = new Transaccion({
    usuario: req.usuario._id,
    nombre: body.nombre,
    tipoTransaccion: body.tipoTransaccion,
    valorTransaccion: body.valorTransaccion,
    estado: body.estado,
    cuenta: body.cuenta,
  });

  transaccion.save((err, transaccionDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    res.status(201).json({
      ok: true,
      transaccion: transaccionDB,
    });
  });
});

module.exports = router;
