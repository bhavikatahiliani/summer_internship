const express = require("express");
const app = express();

const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const ejs = require('ejs');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static("pubic"));
app.set("view engine", "ejs");
mongoose.connect("mongodb://localhost:27017/posts", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const schema = {
    title: String,
    description: String
};

const Article = mongoose.model("articles", schema);

app.get("/article", function (req, res) {
    Article.find(function (err, articles) {
        if (articles) {
            console.log(articles);
            const allvalues = JSON.stringify(articles);
            res.send(allvalues);
        }
        else {
            res.send("no");
            console.log(err);
        }
    })

    app.post("/article", function (req, res) {
        const somename =  Article({
            title: String(req.body.title),
            description: String(req.body.description)
        });

        somename.save();

        console.log(req.body.title);
        console.log(req.body.description);
    })

    app.delete("/article", function (req, res) {
        Article.deleteMany(function(err){
            if(! err) {
                console.log("deleted");
            }
        })
    })

    app.get("/article/:articletitle", function (req, res) {

        Article.findOne({ title: req.params.articletitle }, function (err, onearticle) {
            if (!err) {
                console.log(onearticle);
                const onegetarticle = JSON.stringify(onearticle);
                res.send(onegetarticle);
            }
            else {
                console.log(err);
            }
        })

    });
    app.delete("/article/:articleTitle", function (req, res) {

        Article.deleteOne({ title: req.params.articleTitle }, function (err) {

            if (!err) {
                console.log("one deleted");
            }
        })
    })

})

app.listen(3000, function () {
    console.log("started");
})