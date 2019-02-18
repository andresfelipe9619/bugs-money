const router = require('express').Router();

const _ = require('underscore');

const Cuenta = require('../../models/account');

const {verificaToken} = require('../../middlewares/authentication');

// ===========================//
// Muestra tods las cuentas
// ===========================//
router.get('/cuenta', verificaToken, (req, res) => {
  let desde = req.query.desde || 0;
  desde = Number(desde);

  let limite = req.query.limite || 5;
  limite = Number(limite);

  Cuenta.find({})
      .sort('descripcion')
      .skip(desde)
      .limit(limite)
      .populate('usuario', 'nombre email')
      .populate('presupuesto', 'nombre')
      .exec((err, cuentas) => {
        if (err) {
          return res.status(500).json({
            ok: false,
            err,
          });
        }

        res.json({
          ok: true,
          cuentas,
        });
      });
});
// ===========================//
// Muestra la cuenta por ID
// ===========================//
router.get('/cuenta/:id', verificaToken, (req, res) => {
  let id = req.params.id;

  Cuenta.findById(id)
      .populate('usuario', 'nombre email')
      .populate('presupuesto', 'nombre')
      .exec((err, CuentaDB) => {
        if (err) {
          return res.status(500).json({
            ok: false,
            err,
          });
        }

        if (!CuentaDB) {
          return res.status(400).json({
            ok: false,
            err: {
              message: 'El id no es valido',
            },
          });
        }

        res.json({
          ok: true,
          cuenta: CuentaDB,
        });
      });
});

// ===========================//
// Crea una cuenta
// ===========================//

router.post('/cuenta', verificaToken, function(req, res) {
  let body = req.body;

  let cuenta = new Cuenta({
    usuario: req.usuario._id,
    nombre: body.nombre,
    numeroCuenta: body.numeroCuenta,
    naturalezaCuenta: body.naturalezaCuenta,
    estado: body.estado,
    presupuesto: body.presupuesto,
  });

  cuenta.save((err, cuentaDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    res.status(201).json({
      ok: true,
      cuenta: cuentaDB,
    });
  });
});

// ===========================//
// Actualiza cuenta por id
// ===========================//

router.put('/cuenta/:id', verificaToken, function(req, res) {
  let id = req.params.id;

  let body = _.pick(req.body, [
    'nombre',
    'numeroCuenta',
    'naturalezaCuenta',
    'estado',
    'presupuesto',
  ]);
  // let body = req.body;

  // Cuenta.findById(id, (err, cuentaDB) => {

  //     if (err) {
  //         return res.status(500).json({
  //             ok: false,
  //             err
  //         });
  //     }

  //     if (!cuentaDB) {
  //         return res.status(400).json({
  //             ok: false,
  //             err: {
  //                 message: 'No se encontro el id de la cuenta'
  //             }
  //         });
  //     }

  //     cuentaDB.nombre = body.nombre;
  //     cuentaDB.numeroCuenta = body.numeroCuenta;
  //     cuentaDB.naturalezaCuenta = body.naturalezaCuenta;
  //     cuentaDB.estado = body.estado;
  //     cuentaDB.presupuesto = body.presupuesto;

  //     cuentaDB.save((err, cuentaGuardada) => {

  //         if (err) {
  //             return res.status(500).json({
  //                 ok: false,
  //                 err
  //             });
  //         }

  //         res.json({
  //             ok: true,
  //             cuenta: cuentaGuardada
  //         });

  //     });

  // })
  Cuenta.findByIdAndUpdate(
      id,
      body,
      {new: true, runValidators: true},
      (err, cuentaDB) => {
        if (err) {
          return res.status(400).json({
            ok: false,
            err,
          });
        }

        res.json({
          ok: true,
          cuenta: cuentaDB,
        });
      }
  );
});

// ===========================//
// elimina cuenta por id
// ===========================//

router.delete('/cuenta/:id', verificaToken, function(req, res) {
  let id = req.params.id;
  // Presupuesto.findByIdAndRemove(id, (err, categoriaBorrado) => {
  Cuenta.findByIdAndRemove(id, (err, cuentaBorrada) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    if (!cuentaBorrada) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'cuenta no encontrado',
        },
      });
    }

    res.json({
      ok: true,
      cuenta: cuentaBorrada,
      message: 'Se elimino la cuenta de manera correcta',
    });
  });
});

module.exports = router;
