const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user.controller');
const OrderController = require('../controllers/order.controller');
const TasksController = require('../controllers/tasks.controller');

const { findUser } = require('../middlewares/userMW');

/* localhost:5000/api/users */
router.post('/users', UserController.createUser);
/* localhost:5000/api/users */
router.get('/users', UserController.findUsers);

/* http://localhost:5000/api/users/5 */
router.get('/users/:userId', UserController.findUserById);

router.put('/users/:userId', UserController.updateUser);

router.delete('/users/:userId', UserController.deleteUser);

router.put('/users/v2/:userId', findUser, UserController.updateUserv2);

router.delete('/users/v2/:userId', findUser, UserController.deleteUserv2);

router.post('/users/:userId/orders', OrderController.createOrder);

router.post('/users/:userId/orders/v2', findUser, OrderController.createMagicOrder);

router.post('/task',  TasksController.createTask);

module.exports = router;
