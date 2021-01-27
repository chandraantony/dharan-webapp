const express = require('express');
const commentController = require('../controllers/commentController')

const router = express.Router();

router.get('/byUser', commentController.getComment)


module.exports = router;
