Vagas = require("../model/vagaModel");

exports.index = function(req, res) {
    Vagas.get(function (erro, vagas) {
        if (erro) {
            res.json({
                status: "error",
                message: erro,
            });
        }
        res.json({
            vagas: vagas
        });
    });
};

exports.new = function(req, res) {
    var vaga = new Vagas();
    vaga.profissao = req.body.profissao ? req.body.profissao : vaga.profissao;
    vaga.descricao = req.body.descricao;
    vaga.empresa = req.body.empresa;
    vaga.segmento = req.body.segmento;
    vaga.cidade = req.body.cidade;
    vaga.pais = req.body.pais;

    vaga.save(function (erro) {
        res.json({
            message: "Nova vaga criada!",
            data: vaga
        });
    });
};

exports.view = function (req, res) {
    Vagas.findById(req.params.vaga_id, function (erro, vaga) {
        if (erro)
            res.send(erro);
        res.json({
            message: "Carregando detalhes das vagas...",
            data: vaga
        });
    });
};

exports.filter = function (req, res) {
    Vagas.find(req.params.profissao, function (erro, vaga) {
        if (erro)
            res.send(erro);
        res.json({
            message: "procurando profissoes",
            data: vaga
        });
    });
};

exports.update = function (req, res) {
    Vagas.findById(req.params.vaga_id, function (erro, vaga) {
        if (erro)
            res.send(erro);

        vaga.profissao = req.body.profissao ? req.body.profissao : vaga.profissao;
        vaga.descricao = req.body.descricao;
        vaga.empresa = req.body.empresa;
        vaga.segmento = req.body.segmento;
        vaga.cidade = req.body.cidade;
        vaga.pais = req.body.pais;

        vaga.save(function (erro) {
            if (erro)
                res.json(erro);
            res.json({
                message: "Vaga atualizada!",
                data: vaga
            });
        });
    });
};

exports.delete = function (req, res) {
    Vagas.remove({
        _id: req.params.vaga_id
    }, function (erro, vaga) {
        if (erro)
            res.send(erro);
        res.json({
            status: "success",
            message: "Vaga deletada",
        });
    });
};