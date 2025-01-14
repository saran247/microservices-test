const express = require('express');
const { createUser, getUsers, updateUser, softDeleteUser } = require('../controllers/userController');
const router = express.Router();

router.post('/', createUser);
router.get('/', getUsers);
router.put('/:id', updateUser);
router.delete('/:id', softDeleteUser);

module.exports = router;
