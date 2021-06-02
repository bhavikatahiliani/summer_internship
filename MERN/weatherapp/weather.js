const express = require('express');
const https = require('https');
const app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({ extended: true }));

app.listen(4000, function () {
    console.log("The server has started at port 3000");
});

app.get('/', function (request, response) {
    response.sendFile(__dirname + "/index.html");
});

app.post('/', function (request, response) {
    console.log(request.body.citynames);
    var cityName = request.body.citynames;
    const apikey = "382595e1a8e3c3f44ec2bfec7c3c27f7";
    const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apikey + "&units=metric";
    https.get(url, function (res) {
        res.on("data", function (data) {
            var weatherinfo = JSON.parse(data);
            var weather = weatherinfo.weather[0].main;
            var temperature = weatherinfo.main.temp;
            var place = weatherinfo.name;
            var icon = weatherinfo.weather[0].icon;
            var imgURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
            response.write("<h1>Weather in " + place + " : " + weather + "</h1>");
            response.write("<h1>Temperature in " + place + " : " + temperature + " degree celcius" + "</h1>");
            response.write("<img src =" + imgURL + ">");
            response.send();
        });
    });
});