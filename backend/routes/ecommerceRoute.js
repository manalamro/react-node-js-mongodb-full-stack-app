const express = require('express');
const router = express.Router();
const itemController = require('../controller/ecommerceController');

// CRUD routes

router.post('/AddItems', itemController.createItem);
router.get('/GetItems', itemController.getAllItems);
router.get('/GetItemById/:id', itemController.getItemById);
router.put('/EditItem/:id', itemController.updateItem);
router.delete('/DeleteItem/:id', itemController.deleteItem);

module.exports = router;
