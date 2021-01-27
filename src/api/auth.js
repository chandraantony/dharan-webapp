const express = require('express');
const authController = require('../controllers/authController')
const validator = require('../schema/validator')

const router = express.Router();


router.post('/register', (req, res) => {
    res.json({
        messsage : 'succed'
    })
});

router.post('/login', validator.login, authController.login);

router.post('/forgotPassword', (req, res) => {
    res.json({
        message : 'succedd'
    })
});


module.exports = router;
