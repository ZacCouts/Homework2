var express = require('express');
var router = express.Router();

var UserController = require('../database/user.controllers')

router.get('/', UserController.getUsers)

module.exports = router;