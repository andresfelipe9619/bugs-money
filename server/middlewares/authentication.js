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
    console.log('BODY=>', req.body);
    console.log('USER=>', req.user);
    next();
  });
};

module.exports = {
  verificaToken,
};
