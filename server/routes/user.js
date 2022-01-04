const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Routes
router.post('/', userController.findUsers);

router.get('/', userController.viewUsers);

router.get('/view_user/:id', userController.viewall);

router.post('/new_user', userController.createNewUser);

router.get('/new_user', userController.usersForm);

router.post('/update_user/:id', userController.updateUser);

router.get('/update_user/:id', userController.editUser);

router.get('/:id',userController.deleteUser);
  
module.exports = router;