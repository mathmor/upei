var mongoose = require('mongoose');
// Setup schema
var vagaSchema = mongoose.Schema({
    profissao: {
        type: String,
        required: true
    },
    descricao: {
        type: String,
        required: true
    },
    empresa: {
        type: String,
        required: true
    },
    segmento: {
        type: String,
        required: true
    },
    cidade: String,
    pais: String,
});

// Export Contact model
var Vagas = module.exports = mongoose.model('vagas', vagaSchema);

module.exports.get = function (callback, limit) {
    Vagas.find(callback).limit(limit);
}