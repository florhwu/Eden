/**
 * Created by florencewu on 19/4/2016.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // takes the name of the view to render
    // followed by an object whose properties the view will have access to
    res.render('pathbuilder', { title: 'PathBuilder' });
});

module.exports = router;