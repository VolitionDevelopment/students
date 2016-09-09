var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {
        title: 'Student App',
        students: [
            'Jackson',
            'Danny',
            'Summer',
            'David',
            'JT',
            'Keith',
            'Shirlette',
            'Alex',
            'Eric',
            'Wes',
            'Dan',
            'Danielle',
            'Paige',
            'Drew',
            'Daniel'
        ].sort(),
        selected: function selected(i){
            return i == req.query.student
        }
    });
});

router.get('/students', function(req, res, next) {
    res.render('index', {
        title: 'Student App',
        students: [
            'Jackson',
            'Danny',
            'Summer',
            'David',
            'JT',
            'Keith',
            'Shirlette',
            'Alex',
            'Eric',
            'Wes',
            'Dan',
            'Danielle',
            'Paige',
            'Drew',
            'Daniel'
        ].sort(),
        selected: function selected(i){
            return i == req.query.student
        }
    });
});

module.exports = router;
