// Define dependencies
var express = require('express');
var exphbs = require('express-handlebars');
var mysql = require('mysql');

var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// SetUp EXPRESS server
var app = express();

//Create the port and start app listening 
var PORT = process.env.PORT || 8000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(process.cwd() + '/public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'));

// Tells app to use handlebars to create the layout
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// Import and use router from controller.js file
var router = require('./controllers/burgers_controller.js');
app.use('/', router);

app.listen(PORT, function(){
console.log("App listening on PORT: " + PORT);
});
