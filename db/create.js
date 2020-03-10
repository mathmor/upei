var MongoClient = require('mongodb').MongoClient;
var servidor = 'mongodb://localhost:27017/gamemaster';

MongoClient.connect(servidor, function(erro, db) {
	if (erro)
		console.log("Erro ao estabelecer conexão: " + erro);
	else
		console.log("Conexão estabelecida");

	var dbo = db.db("mydb");

	var vaga = {
		profissao: "desenvolvedor",
		descricao: "desenvolverá a plataforma nova da riot",
		empresa: "Riot",
		segmento: "Desenvolvedora",
		cidade: "São Paulo",
		pais: "Brasil"
	};

	dbo.collection("vagas").insertOne(vaga, function (err, res) {
		if (err) throw err;
		console.log("Consegui carai");
		db.close();
	});

});