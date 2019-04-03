const router = require('express').Router();

const _ = require('underscore');

const Transaction = require('../../models/transaction');

const {verificaToken} = require('../../middlewares/authentication');

router.get('/transaction', verificaToken, (req, res) => {
  let offset = req.query.offset || 0;
  offset = Number(offset);

  let limit = req.query.limit || 5;
  limit = Number(limit);

  Transaction.find({})
      .sort('descripcion')
      .skip(offset)
      .limit(limit)
      .populate('user', 'name email')
      .populate('account', 'name accountNumber')
      .populate('budget', 'name expended limit')
      .exec((err, transactions) => {
        if (err) {
          return res.status(500).json({
            ok: false,
            err,
          });
        }

        res.json({
          ok: true,
          transactions,
        });
      });
});

router.get('/transaction/:id', verificaToken, (req, res) => {
  let id = req.params.id;

  Transaction.findById(id)
      .populate('user', 'name email')
      .populate('account', 'name accountNumber')
      .populate('budget', 'name expended limit')
      .exec((err, transactionDB) => {
        if (err) {
          return res.status(500).json({
            ok: false,
            err,
          });
        }

        if (!transactionDB) {
          return res.status(400).json({
            ok: false,
            err: {
              message: 'El id de la transaction no es valido',
            },
          });
        }

        res.json({
          ok: true,
          transaction: transactionDB,
        });
      });
});

router.post('/transaction', verificaToken, function(req, res) {
  let body = req.body;

  let transaction = new Transaction({
    user: req.user._id,
    name: body.name,
    type: body.type,
    value: body.value,
    state: body.state || false,
    account: body.account,
    budget: body.budget,
  });

  transaction.save((err, transactionDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    res.status(201).json({
      ok: true,
      transaction: transactionDB,
    });
  });
});

module.exports = router;
