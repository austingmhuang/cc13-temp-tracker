const express = require('express');
const router = express.Router();
const {ensureAuthenticated} = require("../config/auth")

router.get('/', (req, res) => {
    res.render('welcome');
})

router.get('/register', (req, res) => {
    res.render('register');
})

router.get('/dashboard', ensureAuthenticated, (req, res) => {
    function next() {
        res.render('dashboard', {
            user:req.user
        })
    };
    ensureAuthenticated(req, res, next)
})
module.exports = router;