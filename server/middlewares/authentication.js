const jwt = require('jsonwebtoken');

let verificaToken = (req, res, next) => {
  let token = req.get('token');

  jwt.verify(token, process.env.SEED, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        err: {
          message: 'Token no válido',
        },
      });
    }

    req.user = decoded.user;
    console.log('\x1b[33m%s\x1b[0m', 'BODY ====>');
    console.log(req.body);
    next();
  });
};

module.exports = {
  verificaToken,
};
