const express = require('express');
const session = require('express-session');

const router = express.Router();

let sess

router.get('/', (req, res) => {
  res.render('form');
});

router.post('/', (req, res) => {
  sess = req.session;
  sess.name  = req.body.name;
  sess.email = req.body.email;
  res.redirect('result');
});

router.get('/result', (req, res) => {
  res.render('result');
});

module.exports = router;