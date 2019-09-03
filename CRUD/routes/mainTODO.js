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
    if(req.body.rowIndex != -1) {
        res.render('updateTODO', {rowIndex : req.body.rowIndex});
    }
    else {
        res.redirect('mainTODO');
    }
});

module.exports = router;