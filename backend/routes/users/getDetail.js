'use strict'

const User = require('../../models/user');

async function getDetail( req, res) {
  const user_id = req.params.id || req.user._id;
  const user = await User.findById( user_id);
  res.json({
    _id: user._id,
    name: user.name,
    avatar: user.avatar,
    email: user.email,
    tel: user.tel,
    dateofbirth: user.dateofbirth,
    sec1: user.sec1,
    sec2: user.sec2,
    sec3: user.sec3,
    address: user.address,
  });
}

module.exports = getDetail;
