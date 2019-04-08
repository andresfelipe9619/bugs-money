const router = require('express').Router();

const _ = require('underscore');

const Budget = require('../../models/budget');

const {verificaToken} = require('../../middlewares/authentication');

router.get('/budget', verificaToken, (req, res) => {
  Budget.find({user: req.user._id})
      .sort('description')
      .populate('user', 'name email')
      .populate('categories', 'name value spent description')
      .exec((err, budgets) => {
        console.log('budgets', budgets);
        if (err) {
          return res.status(500).json({
            ok: false,
            err,
          });
        }

        return res.json({
          ok: true,
          budgets: budgets,
        });
      });
});

router.get('/budget/:id', verificaToken, (req, res) => {
  let id = req.params.id;

  Budget.findById(id, (err, budgetDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    if (!budgetDB) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'El id no es valido',
        },
      });
    }

    res.json({
      ok: true,
      budget: budgetDB,
    });
  });
});

router.post('/budget', verificaToken, (req, res) => {
  let body = req.body;
  let budget = new Budget({
    name: body.name,
    limit: body.limit,
    startDate: body.startDate,
    endDate: body.endDate,
    state: true,
    user: req.user._id,
    categories: [],
  });

  budget.save((err, budgetDB) => {
    console.log('err', err);
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    res.json({
      ok: true,
      budget: budgetDB,
    });
  });
});

router.put('/budget/:id', verificaToken, (req, res) => {
  let id = req.params.id;
  let body = _.pick(req.body, ['name', 'limit', 'startDate', 'endDate']);

  Budget.findByIdAndUpdate(
      id,
      body,
      {new: true, runValidators: true},
      (err, budgetDB) => {
        if (err) {
          return res.status(500).json({
            ok: false,
            err,
          });
        }

        if (!budgetDB) {
          return res.status(400).json({
            ok: false,
            err: {
              message: 'El Budget no existe',
            },
          });
        }

        res.json({
          ok: true,
          budget: budgetDB,
        });
      }
  );
});

router.delete('/budget/:id', verificaToken, (req, res) => {
  let id = req.params.id;
  Budget.findByIdAndRemove(id, (err, deletedBudget) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    if (!deletedBudget) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'Budget no encontrado',
        },
      });
    }

    res.json({
      ok: true,
      message: 'Se elimino el budget de manera correcta',
    });
  });
});

module.exports = router;
