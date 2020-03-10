const http = require("http");
const express = require("express");
const apiRoutes = require("./routes/api-route");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
const hostname = "127.0.0.1";
const port = 3008;

let allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Headers', "*");
    next();
}
app.use(allowCrossDomain);

app.set("port", port);

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());
mongoose.connect("mongodb://localhost:27017/mydb", { useNewUrlParser: true });
var db = mongoose.connection;

if (!db)
    console.log("Error connecting db");
else
    console.log("Db connected successfully");

app.get('/', (_req, res) => res.send('Hello World with Express'));

app.use("/api", apiRoutes);

app.listen(port, hostname, () => {
    console.log('Servidos em execução em http://127.0.0.1:3008/');
});