const mongoose = require('mongoose');

const IssueSchema = mongoose.Schema({
    issue_title : {
        type : String,
        required : true
    },
    issue_text : {
        type : String,
        required : true
    },
    created_by : {
        type : String,
        required : true
    },
    assigned_to : {
        type: String
    },
    created_on : Date,
    updated_on : Date,
    open : Boolean,
});


const Issue = mongoose.model('issue_tracker_issue', IssueSchema);

module.exports = Issue;
