var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/issues/', (req, res, next) => {
  // grab the request body
    const form_data = req.body;

    // put it into the database



    // render it back to the issues page as a new record, sorted descending by date
});

module.exports = router;
