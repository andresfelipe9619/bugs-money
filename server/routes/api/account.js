const router = require('express').Router();

const _ = require('underscore');

const Account = require('../../models/account');

const {verificaToken} = require('../../middlewares/authentication');

router.get('/account', verificaToken, (req, res) => {
  let offset = req.query.offset || 0;
  offset = Number(offset);

  let limit = req.query.limit || 5;
  limit = Number(limit);

  Account.find({user: req.user._id})
      .sort('description')
      .skip(offset)
      .limit(limit)
      .populate('user', 'name email')
      .populate('budget', 'name')
      .exec((err, accounts) => {
        if (err) {
          return res.status(500).json({
            ok: false,
            err,
          });
        }

        res.json({
          ok: true,
          accounts,
        });
      });
});

router.get('/account/:id', verificaToken, (req, res) => {
  let id = req.params.id;

  Account.findById(id)
      .populate('user', 'name email')
      .populate('budget', 'name')
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
          account: CuentaDB,
        });
      });
});

router.post('/account', verificaToken, (req, res) => {
  let body = req.body;
  let account = new Account({
    user: req.user._id,
    name: body.name,
    accountNumber: body.accountNumber,
    nature: body.nature,
    value: body.value,
    // state: body.state,
    // budget: body.budget,
  });

  account.save((err, cuentaDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    res.status(201).json({
      ok: true,
      account: cuentaDB,
    });
  });
});

router.put('/account/:id', verificaToken, (req, res) => {
  let id = req.params.id;

  let body = _.pick(req.body, [
    'name',
    'accountNumber',
    'nature',
    // 'state',
    // 'budget',
  ]);

  Account.findByIdAndUpdate(
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

        if (!cuentaDB) {
          return res.status(400).json({
            ok: false,
            err: {
              message: 'El account no existe',
            },
          });
        }

        res.json({
          ok: true,
          account: cuentaDB,
        });
      }
  );
});

router.delete('/account/:id', verificaToken, (req, res) => {
  let id = req.params.id;
  Account.findByIdAndRemove(id, (err, deletedAccount) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    if (!deletedAccount) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'account no encontrada',
        },
      });
    }

    res.json({
      ok: true,
      account: deletedAccount,
      message: 'Se elimino la account de manera correcta',
    });
  });
});

module.exports = router;
