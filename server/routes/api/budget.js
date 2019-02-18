const router = require('express').Router();

const _ = require('underscore');

const Presupuesto = require('../../models/budget');

const {verificaToken} = require('../../middlewares/authentication');

// ===========================//
// Muestra todos los prsupuestos
// ===========================//
router.get('/presupuesto', verificaToken, (req, res) => {
  Presupuesto.find({})
      .sort('descripcion')
      .populate('usuario', 'nombre email')
      .exec((err, presupuestos) => {
        if (err) {
          return res.status(500).json({
            ok: false,
            err,
          });
        }

        res.json({
          ok: true,
          presupuestos,
        });
      });
});
// ===========================//
// Muestra el presupuesto por ID
// ===========================//
router.get('/presupuesto/:id', verificaToken, (req, res) => {
  let id = req.params.id;

  Presupuesto.findById(id, (err, presupuestoDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    if (!presupuestoDB) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'El id no es valido',
        },
      });
    }

    res.json({
      ok: true,
      presupuesto: presupuestoDB,
    });
  });
});

// ===========================//
// Crea un pesupusto
// ===========================//

router.post('/presupuesto', verificaToken, function(req, res) {
  let body = req.body;

  let presupuesto = new Presupuesto({
    nombre: body.nombre,
    valorPresupuesto: 0,
    fechaInicioPresupuesto: body.fechaInicioPresupuesto,
    fechaFinPresupuesto: body.fechaFinPresupuesto,
    estado: body.estado,
    usuario: req.usuario._id,
  });

  presupuesto.save((err, presupuestoDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    res.json({
      ok: true,
      presupuesto: presupuestoDB,
    });
  });
});

// ===========================//
// Actualiza el presupuesto por id
// ===========================//

router.put('/presupuesto/:id', verificaToken, function(req, res) {
  let id = req.params.id;
  let body = _.pick(req.body, [
    'nombre',
    'valorPresupuesto',
    'fechaInicioPresupuesto',
    'fechaFinPresupuesto',
  ]);

  Presupuesto.findByIdAndUpdate(
      id,
      body,
      {new: true, runValidators: true},
      (err, presupuestoDB) => {
        if (err) {
          return res.status(500).json({
            ok: false,
            err,
          });
        }

        if (!presupuestoDB) {
          return res.status(400).json({
            ok: false,
            err: {
              message: 'El Presupuesto no existe',
            },
          });
        }

        res.json({
          ok: true,
          presupuesto: presupuestoDB,
        });
      }
  );
});

// ===========================//
// elimina el presupuesto por id
// ===========================//

router.delete('/presupuesto/:id', verificaToken, function(req, res) {
  let id = req.params.id;
  // Presupuesto.findByIdAndRemove(id, (err, usuarioBorrado) => {
  Presupuesto.findByIdAndRemove(id, (err, presupuestoBorrado) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    if (!presupuestoBorrado) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'Presupuesto no encontrado',
        },
      });
    }

    res.json({
      ok: true,
      message: 'Se elimino el presupuesto de manera correcta',
    });
  });
});

module.exports = router;
