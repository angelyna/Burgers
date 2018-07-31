// Import (require) burger.js
var burger = require('../models/burger.js');
var express = require('express');

// Create app router
var router = express.Router();

// GET - selectAll
router.get('/', function (req, res) {
	res.redirect('/burgers');
});

router.get('/burgers', function (req, res) {
	burger.selectAll(function (data) {
		var hbsObject = { burgers: data };
		console.log(hbsObject);
		res.render('index', hbsObject);
	});
});


// POST - insertOne
router.post('/burgers/create', function (req, res) {
	burger.insertOne(['burger_name'], [req.body.name], function () {
		res.redirect('/burgers');
	});
});


// PUT - updateOne
router.put('/burgers/update/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	console.log('condition', condition);

	burger.updateOne({ devoured: req.body.devoured }, condition, function () {
		res.redirect('/burgers');
	});
});

// DELETE - deleteOne
router.delete('/burgers/delete/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	burger.deleteOne(condition, function () {
		res.redirect('/burgers');
	});
});
	
// Export router
module.exports = router;
