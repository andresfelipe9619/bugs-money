const router = require('express').Router();

const _ = require('underscore');

const Categoria = require('../models/category');

const {verificaToken} = require('../../middlewares/authentication');

// ===========================//
// Muestra todas las categorias*
// ===========================//
router.get('/categoria', verificaToken, (req, res) => {
  let desde = req.query.desde || 0;
  desde = Number(desde);

  let limite = req.query.limite || 5;
  limite = Number(limite);

  let usuario = req.usuario._id;

  Categoria.find({})
      .sort('descripcion')
      .skip(desde)
      .limit(limite)
      .populate('usuario', 'nombre email')
      .populate('presupuesto', 'nombre')
      .exec((err, categorias) => {
        if (err) {
          return res.status(500).json({
            ok: false,
            err,
          });
        }

        Categoria.aggregate(
            [
              {
                $group: {
                  _id: usuario,
                  balance: {$sum: '$precioCat'},
                },
              },
            ],
            function(err, result) {
              if (err) {
                console.log(err);
                return;
              }
              res.json({
                ok: true,
                categorias,
                result,
              });
            }
        );

      // res.json({
      //     ok: true,
      //     categorias
      // });
      });
});
// ===========================//
// Muestra la categoria por ID
// ===========================//
router.get('/categoria/:id', verificaToken, (req, res) => {
  let id = req.params.id;

  Categoria.findById(id)
      .populate('usuario', 'nombre email')
      .populate('presupuesto', 'nombre')
      .exec((err, categoriaDB) => {
        if (err) {
          return res.status(500).json({
            ok: false,
            err,
          });
        }

        if (!categoriaDB) {
          return res.status(400).json({
            ok: false,
            err: {
              message: 'El id no es valido',
            },
          });
        }

        res.json({
          ok: true,
          categoria: categoriaDB,
        });
      });
});

// ===========================//
// Buscar Categorias
// ===========================//
router.get('/categoria/buscar/:termino', verificaToken, (req, res) => {
  let termino = req.params.termino;

  let regex = new RegExp(termino, 'i');

  Categoria.find({nombre: regex})
      .populate('usuario', 'nombre email')
      .populate('presupuesto', 'nombre')
      .exec((err, categoriaDB) => {
        if (err) {
          return res.status(500).json({
            ok: false,
            err,
          });
        }

        res.json({
          ok: true,
          categoria: categoriaDB,
        });
      });
});
// ===========================//
// Crea una categoria
// ===========================//

router.post('/categoria', verificaToken, function(req, res) {
  let body = req.body;

  let categoria = new Categoria({
    usuario: req.usuario._id,
    nombre: body.nombre,
    precioCat: body.precioCat,
    precioGstdo: body.precioGstdo,
    descripcion: body.descripcion,
    presupuesto: body.presupuesto,
  });

  categoria.save((err, categoriaDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    res.status(201).json({
      ok: true,
      categoria: categoriaDB,
    });
  });
});

// ===========================//
// Actualiza la categoria por id
// ===========================//

router.put('/categoria/:id', verificaToken, function(req, res) {
  let id = req.params.id;
  let body = req.body;

  Categoria.findById(id, (err, categoriaDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    if (!categoriaDB) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'No se encontro el id categoria',
        },
      });
    }

    categoriaDB.nombre = body.nombre;
    categoriaDB.precioCat = body.precioCat;
    categoriaDB.precioGstdo = body.precioGstdo;
    categoriaDB.descripcion = body.descripcion;
    categoriaDB.presupuesto = body.presupuesto;

    categoriaDB.save((err, categoriaGuardada) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      res.json({
        ok: true,
        categoria: categoriaGuardada,
      });
    });
  });
});

// ===========================//
// elimina la categoria por id
// ===========================//

router.delete('/categoria/:id', verificaToken, function(req, res) {
  let id = req.params.id;
  // Presupuesto.findByIdAndRemove(id, (err, categoriaBorrado) => {
  Categoria.findByIdAndRemove(id, (err, categoriaBorrado) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    if (!categoriaBorrado) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'categoria no encontrado',
        },
      });
    }

    res.json({
      ok: true,
      categoria: categoriaBorrado,
      message: 'Se elimino la categoria de manera correcta',
    });
  });
});

module.exports = router;
I;
