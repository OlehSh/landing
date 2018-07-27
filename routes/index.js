const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.redirect('/en');
});
router.get('/:lang([a-z]{2})', indexController.fetch);

module.exports = router;
