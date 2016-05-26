//require module
var http = require('http');

//submit URL on CLI
if(process.argv.length <= 2) {
	console.log("Usage: " + __filename + " URL");
}

var url = process.argv[2]

//url is submitted and http.get requesting a callback with a response object
http.get(url, function(res) {
	console.log("Got Response: " + res.statusCode);
}).on('error', function(e) {
	console.log("Got error: " + e.message);
});

//with all code asynchronous, the content does not necessarily arrive when the 
//callback is executed. A response object is needed to consume the data.