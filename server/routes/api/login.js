const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(process.env.CLIENT_ID);

const User = require('../../models/user');

let router = express.Router();

router.post('/login', (req, res) => {
  let body = req.body;
  User.findOne({email: body.email, state: true}, (err, userDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    if (!userDB) {
      return res.status(400).json({
        ok: false,
        err: {
          message: '(User) or password incorrectos',
        },
      });
    }

    if (!bcrypt.compareSync(body.password, userDB.password)) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'User or (password) incorrectos',
        },
      });
    }

    let token = jwt.sign(
        {
          user: userDB,
        },
        process.env.SEED,
        {expiresIn: process.env.CADUCIDAD_TOKEN}
    );

    return res.json({
      ok: true,
      user: userDB,
      token,
    });
  });
});

async function verify(token) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });
  const payload = ticket.getPayload();

  return {
    name: payload.name,
    email: payload.email,
    img: payload.picture,
    google: true,
  };
}

router.post('/login/google', async (req, res) => {
  let token = req.body.idtoken;

  let googleUser = await verify(token).catch((e) => {
    return res.status(403).json({
      ok: false,
      err: e,
    });
  });

  User.findOne({email: googleUser.email}, (err, userDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    if (userDB) {
      if (userDB.google === false) {
        return res.status(400).json({
          ok: false,
          err: {
            message: 'Debe usar su autenticacion normal',
          },
        });
      } else {
        let token = jwt.sign(
            {
              user: userDB,
            },
            process.env.SEED,
            {expiresIn: process.env.CADUCIDAD_TOKEN}
        );

        return res.json({
          ok: true,
          user: userDB,
          token,
        });
      }
    } else {
      let user = new User();

      user.name = googleUser.name;
      user.email = googleUser.email;
      user.img = googleUser.img;
      user.google = true;
      user.password = ':)';

      user.save((err, userDB) => {
        if (err) {
          return res.status(500).json({
            ok: false,
            err,
          });
        }

        let token = jwt.sign(
            {
              user: userDB,
            },
            process.env.SEED,
            {expiresIn: process.env.CADUCIDAD_TOKEN}
        );

        return res.json({
          ok: true,
          user: userDB,
          token,
        });
      });
    }
  });
});

module.exports = router;
