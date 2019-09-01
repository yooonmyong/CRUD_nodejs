var express = require('express');
var router = express.Router();
var bodyparser = require('body-parser');

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

router.use(bodyparser.json());

router.get('/', function(req, res, next) {
    res.render('mainTODO');
});

router.post('/', function(req, res, next) {
    res.render('updateTODO', {rowIndex : req.body.rowIndex});
});

module.exports = router;