var MongoClient = require('mongodb').MongoClient;
var servidor = 'mongodb://localhost:27017/gamemaster';

MongoClient.connect(servidor, function(erro, db) {
	if (erro)
		console.log("Erro ao estabelecer conexão: " + erro);
	else
		console.log("Conexão estabelecida");

	var dbo = db.db("mydb");

	var vaga = {
		profissao: "social midia",
		descricao: "atuarua em projetos e planejamento para aumentar a presenca nas redes sociais",
		empresa: "Level Up",
		segmento: "Publisher",
		cidade: "São Paulo",
		pais: "Brasil"
	};

	dbo.collection("vagas").findOne({}, function (err, res) {
		if (err) throw err;
		console.log(res);
		db.close();
	});

});