const express = require("express");
const { getInitData } = require("./auth");
const router = express.Router();



// Register user
// Login
// Ignore these

router.get('/user', async (req, res, next) => {
  const initData = getInitData(res);
  if (!initData) {
    return next(new Error('Cannot display init data as it was not found'));
  }
  const { user } = initData;
  const { id: userId, firstName, lastName, username, languageCode } = user;
  console.log('Referral ID---:', user.userId);
  return res.json(username);

});

// ----------- Main Issue ---------
// Check mog balance
// Check mogg holdering duration

module.exports = router;