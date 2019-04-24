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
    sess.phone  = req.body.phone;
    sess.postcode = req.body.postcode;
    res.redirect('result');
  }
});

router.get('/personal-information', (req, res) => {
  res.render('personal-information');
});

router.get('/child-information', (req, res) => {
  res.render('child-information');
});

router.get('/current-availability', (req, res) => {
  res.render('current-availability');
});

router.get('/completed', (req, res) => {
  res.render('completed');
});

module.exports = router;