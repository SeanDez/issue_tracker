var express = require('express');
var router = express.Router();
const Issue = require("../models/issues");

const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI);


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/issues/', (req, res, next) => {
  // grab the request body
    const form_data = req.body;

    // put it into the database
    const new_issue_document = new Issue({
        issue_title : req.body.issue_title,
        issue_text : req.body.issue_text,
        created_by : req.body.created_by,
        assigned_to : req.body.assigned_to,
        created_on : Date.now(),
        open : true
    });
    new_issue_document.save((error, document) => {
        if (error) { console.log(error) }
        else {
            console.log("saved: ", document);
            // render it back to the issues page as a new record, sorted descending by date
            Issue.find({}).then((documents) => {
                res.render('index', { database_documents : documents });
            });
        }
    });

});


router.get('/api/issues/delete/:record_id', (req, res, next) => {
    // capture the issue id as a local
    const record_id = req.params.record_id;
    console.log('record_id', record_id);

    // send a database delete statement on the model
    Issue.deleteOne({ _id: record_id }, (error) => {
      if (error) {
          console.log(error);
      } else {
          console.log(`deleted record ${record_id}`);
          Issue.find({}).then((documents) => {
              res.render('index', { database_documents : documents });
          });
      }
    });


});




module.exports = router;
