//import
const express = require("express");
const BodyParser = require('body-parser');
const path = require('path');


//setup
const app = express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'pug');
app.use(express.static('public'));


app.get("/", (req, res) => {
  res.redirect("HomePage");
});

app.get("/HomePage", (req, res) => {
  res.render("HomePage");
});

app.get("/IdentificationPage", (req, res) => {
  res.render("IdentificationPage");
});

app.get("/ChooseCoursePage", (req, res) => {
  res.render("ChooseCoursePage");
});

app.get("/ReviewPage", (req, res) => {
  res.render("ReviewPage");
});


app.get("/GoodbyePage", (req, res) => {
  res.render("GoodbyePage");
});



app.listen(process.env.PORT || 3000);





