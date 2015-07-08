('use strict');

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var port = 9898;
var mongoUri = "mongodb://localhost:27017/db";
var leadsCtrl = require('./controllers/leadsCtrl');
var techniciansCtrl = require('./controllers/techniciansCtrl');
// var sendgrid  = require('sendgrid')(cranium152, passw0rd);

// sendgrid.send({
//   to:       'utahpianotuning@gmail.com',
//   from:     'utahpianotuning@gmail.com',
//   subject:  'Hello World',
//   text:     'My first email through SendGrid.'
// }, function(err, json) {
//   if (err) { return console.error(err); }
//   console.log(json);
// });


var app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + "/public"));


app.post('/api/leads', leadsCtrl.createLead);
app.get('/api/leads', leadsCtrl.readLead);


app.post('/api/technicians', techniciansCtrl.createTechnician);


mongoose.connect(mongoUri);
mongoose.connection.once('open', function(){
	console.log('Connected to mongodb at ' + mongoUri);
})

app.listen(port, function(){
	console.log("now listening on port " + port);
})
