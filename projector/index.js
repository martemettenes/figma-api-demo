const express = require("express");
const engines = require("consolidate");
const cors = require("cors");
const app = express();
app.use(cors());
app.engine("html", engines.swig);
app.set("views", __dirname);
app.set("view engine", "html");


app.use(express.static(__dirname));

app.get("/",
    function(req, res) {
        res.render("index");
    }
)

app.listen(3000);