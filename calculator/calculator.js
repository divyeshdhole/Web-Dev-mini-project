const express = require("express");
const bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.get("/", function(req, res)
{
    res.sendFile(__dirname + "/index.html");
});


app.post("/", function(req, res)
{
    var num1 = parseInt(req.body.num1);
    var num2 = parseInt(req.body.num2);
    var result = num1 + num2;
    res.send("The result of calculation is: " + result);
});
app.get("/bmicalculator", function(req, res)
{
    res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function(req, res)
{
    var height = parseFloat(req.body.height);
    var weight = parseFloat(req.body.weight);
    var BMI = weight / Math.pow(height, 2);
    res.send("The BMI is: " + BMI);
});
app.listen(3000, function()
{
    console.log("Server is running on port 3000.......")
});