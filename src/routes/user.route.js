const express = require('express');

const router = express.Router();

const userController = require('../controllers/user.controller');

router.get("/new", userController.newPage);

router.post("/home", userController.userNew);

// router.get('/sign-up', userController.registPage);

router.get('/sign-in', userController.loginPage);

// router.post('/sign-up', userController.userSignUp);

router.post('/sign-in', userController.userSignIn);

router.get('/logout', userController.useSignOut);

module.exports = router;