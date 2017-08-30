var express = require("express");
var fs = require("fs");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

app.use("/static", express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/form", function (req, res) {
    res.sendFile('form.html', {root: path.join(__dirname, './public')});
});

app.post("/submit", function (req, res) {
   var html = fs.readFileSync("./public/index.html", "utf-8");
   var name = req.body.firstName + " " + req.body.lastName;
   var html1 = html.replace("{{name}}", name);

   var oneDay = 24*60*60*1000;
   var firstDate = new Date(req.body.DOB);
   var secondDate = new Date();
   var diffDays = Math.round(Math.abs((firstDate - secondDate.getTime())/(oneDay)));

   console.log(firstDate);
   console.log(secondDate);

   var html2 = html1.replace("{{days}}", diffDays);

   res.end(html2);
   console.log(req.body);
});

app.listen(3000, function() {
    console.log("Listening at port 3000");
});