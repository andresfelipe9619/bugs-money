let router = require('express').Router();

router.use(require('./user'));
router.use(require('./login'));
router.use(require('./budget'));
router.use(require('./account'));
router.use(require('./transaction'));

module.exports = router;
