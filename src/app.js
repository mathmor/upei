var express = require("express");
var app = express();

app.get("/", function(req, res){
	res.sendFile("./index.html");
});

app.get("/vagas", function(req, res){
	res.sendFile("./vagas.html");
});

app.listen(8081, function(){
	console.log("Executando");
});