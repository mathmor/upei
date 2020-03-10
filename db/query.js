var MongoClient = require('mongodb').MongoClient;
var servidor = 'mongodb://localhost:27017/gamemaster';

MongoClient.connect(servidor, function(erro, db) {
	if (erro)
		console.log("Erro ao estabelecer conexão: " + erro);
	else
		console.log("Conexão estabelecida");

	var dbo = db.db("mydb");

	var query = {
		profissao: "desenvolvedor",
	};

	var mysort = { empresa: 1 };

	dbo.collection("vagas").find().sort(mysort).toArray(function (err, res) {
		if (err) throw err;
		console.log(res);
		db.close();
	});

});