var router = require("express").Router();

router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'api-route'
    });
});

var vagaController = require("../controller/vagaController");

router.route("/vagas")
    .get(vagaController.index)
    .post(vagaController.new);

router.route("/vagas/:vaga_id")
    .get(vagaController.view)
    .get(vagaController.filter)
    .patch(vagaController.update)
    .put(vagaController.update)
    .delete(vagaController.delete);

/*router.get("/vagas", vagaController.view);

router.post("/vagas", vagaController.new);

router.get("/vagas/:vaga_id", vagaController.view);

router.patch("/vagas/:vaga_id", vagaController.update);

router.put("/vagas/:vaga_id", vagaController.update);

router.delete("/vagas/:vaga_id", vagaController.delete);*/

module.exports = router;