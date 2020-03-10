var con = require("db/db_connection.js")

$(document).ready(function(){
	$('#submit').click(function(){
		var seg = $("#seg").val()
		var pro = $("#pro").val()
		var loc = $("#loc").val()
		var car = $("#car").val()

		alert(seg + pro + loc + car);
	})
});