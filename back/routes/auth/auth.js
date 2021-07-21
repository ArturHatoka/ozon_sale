// const Router = require('express').Router;
// const router = new Router()

const express = require('express');
const router = express();
const authController = require('../../controllers/auth/authController');
const { body } = require('express-validator')
const authMiddleware = require('./../../middleware/authMiddleware');

router.post('/auth/register',

    body('name').isLength({min: 4,  max: 10}),
    body('password').isLength({min: 3,  max: 32}),

    authController.register );

router.post('/auth/login', authController.login );
router.post('/auth/logout', authController.logout );

router.post('/auth/refresh', authController.refresh );


// router.get('/auth/users', authController.getUsers );
router.get('/auth/users', authMiddleware, authController.getUsers );



module.exports = router;

