const router = require('express').Router();
const User = require('../../models/user');

const bcrypt = require('bcryptjs');
const _ = require('underscore');

const {verificaToken} = require('../../middlewares/authentication');

router.get('/user', verificaToken, (req, res) => {
  let offset = req.query.offset || 0;
  offset = Number(offset);

  let limit = req.query.limit || 5;
  limit = Number(limit);

  User.find({state: true}, 'name email state google img')
      .skip(offset)
      .limit(limit)
      .exec((err, users) => {
        if (err) {
          return res.status(400).json({
            ok: false,
            err,
          });
        }

        User.count({state: true}, (err, count) => {
          res.json({
            ok: true,
            users,
            count,
          });
        });
      });
});

router.post('/user', (req, res) => {
  let body = req.body;

  let user = new User({
    name: body.name,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
  });

  user.save((err, userDB) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }

    res.json({
      ok: true,
      user: userDB,
    });
  });
});

router.put('/user/:id', [verificaToken], (req, res) => {
  let id = req.params.id;
  let body = _.pick(req.body, ['name', 'email', 'img', 'state']);

  User.findByIdAndUpdate(
      id,
      body,
      {new: true, runValidators: true},
      (err, userDB) => {
        if (err) {
          return res.status(400).json({
            ok: false,
            err,
          });
        }

        res.json({
          ok: true,
          user: userDB,
        });
      }
  );
});

router.delete('/user/:id', [verificaToken], (req, res) => {
  let id = req.params.id;

  // User.findByIdAndRemove(id, (err, usuarioBorrado) => {

  let cambiaEstado = {
    state: false,
  };

  User.findByIdAndUpdate(
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
              message: 'User no encontrado',
            },
          });
        }

        res.json({
          ok: true,
          user: usuarioBorrado,
        });
      }
  );
});

module.exports = router;
