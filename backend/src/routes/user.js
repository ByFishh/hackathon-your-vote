const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');

router.get('/', userCtrl.getAllUser);
router.get('/:id', userCtrl.getCurrentUser);
router.get("/wallet/:wallet", userCtrl.getWalletUser)
router.put('/:id', userCtrl.editUser);
router.delete('/:id', userCtrl.deleteAccount);
module.exports = router;