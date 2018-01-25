var express = require('express');
var app = express();
var mysql = require('mysql');
var connection = mysql.createConnection({
	host     : '176.122.128.91',
	user     : 'fzm',
	password : '123456',
	database: 'fzm',
	port: 3306
});
connection.connect();

app.get('/', function (req, res) {
	connection.query('SELECT * from user;', function(err, rows, fields) {
		if (err) throw err;
		console.log(rows)
		res.send(rows)
	});
	connection.end();
});

import production from './src/data/production'

app.get('/getProduction', function (req, res) {
	res.send(production)
});

var server = app.listen(3000, function () {
	var host = server.address().address;
	var port = server.address().port;

	console.log('Example app listening at http://%s:%s', host, port);
});