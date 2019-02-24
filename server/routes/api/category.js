const router = require('express').Router();

const _ = require('underscore');

const Category = require('../models/category');

const {verificaToken} = require('../../middlewares/authentication');

// ===========================//
// Muestra todas las categories*
// ===========================//
router.get('/category', verificaToken, (req, res) => {
  let offset = req.query.offset || 0;
  offset = Number(offset);

  let limit = req.query.limit || 5;
  limit = Number(limit);

  let user = req.user._id;

  Category.find({})
      .sort('description')
      .skip(offset)
      .limit(limit)
      .populate('user', 'name email')
      .populate('budget', 'name')
      .exec((err, categories) => {
        if (err) {
          return res.status(500).json({
            ok: false,
            err,
          });
        }

        Category.aggregate(
            [
              {
                $group: {
                  _id: user,
                  balance: {$sum: '$value'},
                },
              },
            ],
            (err, result) => {
              if (err) {
                console.log(err);
                return;
              }
              res.json({
                ok: true,
                categories,
                result,
              });
            }
        );

      // res.json({
      //     ok: true,
      //     categories
      // });
      });
});
// ===========================//
// Muestra la category por ID
// ===========================//
router.get('/category/:id', verificaToken, (req, res) => {
  let id = req.params.id;

  Category.findById(id)
      .populate('user', 'name email')
      .populate('budget', 'name')
      .exec((err, categoryDB) => {
        if (err) {
          return res.status(500).json({
            ok: false,
            err,
          });
        }

        if (!categoryDB) {
          return res.status(400).json({
            ok: false,
            err: {
              message: 'El id no es valido',
            },
          });
        }

        res.json({
          ok: true,
          category: categoryDB,
        });
      });
});

// ===========================//
// Buscar Categorias
// ===========================//
router.get('/category/buscar/:termino', verificaToken, (req, res) => {
  let termino = req.params.termino;

  let regex = new RegExp(termino, 'i');

  Category.find({name: regex})
      .populate('user', 'name email')
      .populate('budget', 'name')
      .exec((err, categoryDB) => {
        if (err) {
          return res.status(500).json({
            ok: false,
            err,
          });
        }

        res.json({
          ok: true,
          category: categoryDB,
        });
      });
});
// ===========================//
// Crea una category
// ===========================//

router.post('/category', verificaToken, (req, res) => {
  let body = req.body;

  let category = new Category({
    user: req.user._id,
    name: body.name,
    value: body.value,
    expended: body.expended,
    description: body.description,
    budget: body.budget,
  });

  category.save((err, categoryDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    res.status(201).json({
      ok: true,
      category: categoryDB,
    });
  });
});

// ===========================//
// Actualiza la category por id
// ===========================//

router.put('/category/:id', verificaToken, (req, res) => {
  let id = req.params.id;
  let body = req.body;

  Category.findById(id, (err, categoryDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    if (!categoryDB) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'No se encontro el id category',
        },
      });
    }

    categoryDB.name = body.name;
    categoryDB.value = body.value;
    categoryDB.expended = body.expended;
    categoryDB.description = body.description;
    categoryDB.budget = body.budget;

    categoryDB.save((err, categoriaGuardada) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      res.json({
        ok: true,
        category: categoriaGuardada,
      });
    });
  });
});

// ===========================//
// elimina la category por id
// ===========================//

router.delete('/category/:id', verificaToken, (req, res) => {
  let id = req.params.id;
  // Presupuesto.findByIdAndRemove(id, (err, categoriaBorrado) => {
  Category.findByIdAndRemove(id, (err, categoriaBorrado) => {
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
          message: 'category no encontrado',
        },
      });
    }

    res.json({
      ok: true,
      category: categoriaBorrado,
      message: 'Se elimino la category de manera correcta',
    });
  });
});

module.exports = router;
