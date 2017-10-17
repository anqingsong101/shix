var http = require("http");
var fs = require("fs");
http.createServer(function(req,res) {
	res.setHeader("Access-Control-Allow-Origin","*")
	fs.readFile(".json",function(err,data) {
		if (err) {
			res.write("404");
			console.log(err)
		} else{
			res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
			res.write(data);
		}
		res.end()
	})
}).listen(1100)
console.log("0")
