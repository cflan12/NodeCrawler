var http = require('http');
const https = require('https');

if (process.argv.length <= 2) {
	console.log("Usage: " + __filename + " URL");
	process.exit(-1);
}

var url = process.argv[2]

https.get(url, function(res) {
	console.log("Got response: " + res.statusCode);
	var content = '';
	res.on('data', function(chunk) {
		console.log('chunk ' + chunk.length);
		content += chunk;
	});
	res.on('end', function() {
		console.log('end');
		console.log(content.length);
		console.log(content);
	});
}).on('error', function(e) {
	console.log("Got error: " + e.message);
});

//server response initiated Node to excuse the callback function passing an object
//representing the response (res).

//Two callbacks are attached to this object, res.on('data', function(chunk)) for each chunk 
//of data sent by the server. While waiting for all the data from the server, we have functionality
//for other tasks. 

//The variable chunk will append the current chunk to this variable, as long as the size of this 
//page fits in the memory.

//The second callback function, res.on('end', function()) is attached to the event when the 
//responses have finished consuming all the data. This makes sure we have receieved all the data
//from the server