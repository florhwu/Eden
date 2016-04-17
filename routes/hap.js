/**
 * Created by florencewu on 15/4/2016.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    // takes the name of the view to render
    // followed by an object whose properties the view will have access to
    res.render('hap', { title: 'Happiness' });
});

module.exports = router;
