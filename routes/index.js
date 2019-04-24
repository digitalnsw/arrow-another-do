const express = require('express');
const session = require('express-session');
const { check, validationResult } = require('express-validator/check');

const router = express.Router();

let sess

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/personal-information', (req, res) => {
  res.render('personal-information');
});

router.post('/personal-information', [
  check('name').isLength({ min: 3}),
  check('email').isEmail(),
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.render('personal-information', {
      errors: errors.array()
    });
  } else {
    sess = req.session;
    sess.name  = req.body.name;
    sess.email = req.body.email;
    res.redirect('result');
  }
});

router.get('/result', (req, res) => {
  res.render('result');
});

module.exports = router;