const express = require('express');
const { route } = require('./auth');

const router = express.Router();
const auth = require('./auth');
const upload = require('./upload');
const comment = require('./comment');
const customer = require('./customer')
const menu = require('./menu')

router.get('/', (req, res) => {
  res.json({
    message: 'V1 bro'
  });
});

router.use('/auth', auth);
router.use('/upload', upload);
router.use('/comment',comment);
router.use('/customer', customer);
router.use('/menu', menu)


module.exports = router;
