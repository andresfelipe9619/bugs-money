let express = require('express');
let router = express.Router();
const bcrypt = require('bcryptjs');
const _ = require('underscore');

// const {verificaToken} = require('../../middlewares/authentication');
module.exports = (model, _id = null) => {
  router
      .get('/', (req, res) => {
        let offset = req.query.offset || 0;
        offset = Number(offset);

        let limit = req.query.limit || 5;
        limit = Number(limit);
        if (!model) {
          console.log('get all');
          return;
        }
        model
            .find({estado: true}, 'nombre email role estado google img')
            .skip(offset)
            .limit(limit)
            .exec((err, data) => {
              if (err) {
                return res.status(400).json({
                  ok: false,
                  err,
                });
              }

              model.count({estado: true}, (err, conteo) => {
                res.json({
                  ok: true,
                  data,
                  cuantos: conteo,
                });
              });
            });
      })
      .post('/', (req, res) => {
        let body = req.body;
        if (!model) {
          console.log('create one');
          return;
        }
        let instance = new model.constructor({
          nombre: body.nombre,
          email: body.email,
          password: bcrypt.hashSync(body.password, 10),
          role: body.role,
        });

        instance.save((err, usuarioDB) => {
          if (err) {
            return res.status(400).json({
              ok: false,
              err,
            });
          }

          res.json({
            ok: true,
            usuario: usuarioDB,
          });
        });
      })
      .put('/:id', (req, res) => {
        if (!model) {
          console.log('update one');
          return;
        }
        let id = req.params.id;
        let body = _.pick(req.body, ['nombre', 'email', 'img', 'estado']);

        model.findByIdAndUpdate(
            id,
            body,
            {new: true, runValidators: true},
            (err, usuarioDB) => {
              if (err) {
                return res.status(400).json({
                  ok: false,
                  err,
                });
              }

              res.json({
                ok: true,
                usuario: usuarioDB,
              });
            }
        );
      })
      .delete('/:id', (req, res) => {
        let id = req.params.id;
        if (!model) {
          console.log('delete one');
          return;
        }
        // model.findByIdAndRemove(id, (err, usuarioBorrado) => {

        let cambiaEstado = {
          estado: false,
        };

        model.findByIdAndUpdate(
            id,
            cambiaEstado,
            {new: true},
            (err, deletedDocument) => {
              if (err) {
                return res.status(400).json({
                  ok: false,
                  err,
                });
              }

              if (!deletedDocument) {
                return res.status(400).json({
                  ok: false,
                  err: {
                    message: `${model.constructor} no encontrado`,
                  },
                });
              }

              res.json({
                ok: true,
                data: deletedDocument,
              });
            }
        );
      });
  return router;
};
