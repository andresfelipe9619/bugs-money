let express = require('express');
let router = express.Router();
const bcrypt = require('bcryptjs');
const _ = require('underscore');

const Usuario = require('../../models/user');
const {
  verificaToken,
  verificaAdminRole, 
} = require('../../middlewares/authentication');

router.get('/', verificaToken, (req, res) => {
  let desde = req.query.desde || 0;
  desde = Number(desde);

  let limite = req.query.limite || 5;
  limite = Number(limite);

  Usuario.find({estado: true}, 'nombre email role estado google img')
      .skip(desde)
      .limit(limite)
      .exec((err, usuarios) => {
        if (err) {
          return res.status(400).json({
            ok: false,
            err,
          });
        }

        Usuario.count({estado: true}, (err, conteo) => {
          res.json({
            ok: true,
            usuarios,
            cuantos: conteo,
          });
        });
      });
});

router.post('/', [verificaToken, verificaAdminRole], function(req, res) {
  let body = req.body;

  let usuario = new Usuario({
    nombre: body.nombre,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    role: body.role,
  });

  usuario.save((err, usuarioDB) => {
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
});

router.put('/:id', [verificaToken, verificaAdminRole], function(
    req,
    res
) {
  let id = req.params.id;
  let body = _.pick(req.body, ['nombre', 'email', 'img', 'role', 'estado']);

  Usuario.findByIdAndUpdate(
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
});

router.delete('/:id', [verificaToken, verificaAdminRole], function(
    req,
    res
) {
  let id = req.params.id;

  // Usuario.findByIdAndRemove(id, (err, usuarioBorrado) => {

  let cambiaEstado = {
    estado: false,
  };

  Usuario.findByIdAndUpdate(
      id,
      cambiaEstado,
      {new: true},
      (err, usuarioBorrado) => {
        if (err) {
          return res.status(400).json({
            ok: false,
            err,
          });
        }

        if (!usuarioBorrado) {
          return res.status(400).json({
            ok: false,
            err: {
              message: 'Usuario no encontrado',
            },
          });
        }

        res.json({
          ok: true,
          usuario: usuarioBorrado,
        });
      }
  );
});

module.exports = router;
