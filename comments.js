// Create web server

var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');

// GET /comments
// Route for comments collection
router.route('/comments')
    // GET /comments
    // Get all comments
    .get(function(req, res) {
        Comment.find(function(err, comments) {
            if (err)
                res.send(err);
            res.json(comments);
        });
    })
