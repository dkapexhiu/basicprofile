'use strict'

const passport = require('passport');

function login (req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) return next(err);
    if (!user) {
      return res.status(401).json({ error: info.message });
    }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      const {_id, name, email, avatar, tel, dateofbirth, sec1 } = user;
      res.send( {_id, name, email, avatar, tel, dateofbirth, sec1 });
    });
  })(req, res, next);
}

module.exports = login;
