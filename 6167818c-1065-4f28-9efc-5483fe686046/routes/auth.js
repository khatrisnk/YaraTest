var express = require('express');
var router = express.Router();
var keyStore = require('../key-store');
var middleware = require('../middleware');
router.use(middleware);
router.get('/', keyStore);


module.exports = router;
