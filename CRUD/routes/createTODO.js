var express = require('express');
var router = express.Router();

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');

router.get('/', function(req, res, next) {
    res.render('createTODO');
});

router.post('/', function(req, res, next) {
    res.redirect('mainTODO');
});

module.exports = router;