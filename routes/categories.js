var express = require('express');
var router = express.Router();
var db = require('../db/db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  db.test().then(() => {
    res.send('Connection has been established successfully.');
  })
  .catch(err => {
    res.status(500).send('Unable to connect to the database');
  });

});

module.exports = router;
