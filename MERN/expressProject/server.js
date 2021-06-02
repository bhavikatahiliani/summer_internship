const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))


app.listen(3000, function () {
	console.log("started");
})

app.get("/", function (request, response) {
	response.sendFile(__dirname + "/index.html");
});

app.get("/bmi", function (req, res) {
	res.sendFile(__dirname + "/bmi.html");

});

app.post("/bmi", function (req, res) {
	var height = Number(req.body.height);
	var weight = Number(req.body.mass);
	var BMI = weight /( height * height);
	res.send("the bmi is " + BMI);
})

app.post("/", function (request, response) {
	var number1 = Number(request.body.num1);
	var number2 = Number(request.body.num2);

	var result = number1 + number2;
	console.log(request.body.num1 + request.body.num2);
	response.send("addition = " + result);
});

/*
app.get("/", function (request, response) {
	response.send('<h1> Hello there thanks for visiting, do visit again :) </h1>');
});

app.get("/about", function (request, response) {
	response.send('<h1> My email is bhavika@gmail.com </h1>');
});

app.get("/bhavi", function (request, response) {
	response.send("<h1>bhavika here...heeellooooooooo </h1>");
});
*/