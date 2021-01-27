const express = require('express');
const customerController = require('../controllers/customerController')

const router = express.Router();

router.get('/', customerController.getCustomer)
router.get('/:id', customerController.customerById)
router.put('/:id', customerController.updateCustomer)
router.delete('/:id', customerController.deleteCustomer)


module.exports = router;
