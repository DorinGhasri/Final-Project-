//import
const express = require("express");
const BodyParser = require('body-parser');
const path = require('path');
const app = express();
const CRUD_operations = require("./DB/CRUD"); 
const CreateDB = require('./DB/CreateDB');
//const JSFunc = require('./public/static/StarsFunc');
const JSValid = require('./DB/ValidationFunc');
const stringify = require('csv-stringify').stringify;
const { parse } = require("csv-parse");
const CSVToJSON = require('csvtojson');
const cookieParser = require('cookie-parser')

//setup
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({extended: true}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static('static'));
app.use(cookieParser());


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
  if(req.cookies.Anon == 'true' && req.cookies){
    res.render("ReviewPage",{AnonMessage: "*ביקורות האתר הינן אנונימיות"});
  }else if(req.cookies.Anon =='false') {
    res.render("ReviewPage");
  }

});


app.get("/GoodbyePage", (req, res) => {
  res.render("GoodbyePage");
});

app.listen(process.env.PORT || 3000);

//get and post
app.post("/newReview", CRUD_operations.createNewReview);
app.get("/userdetails",JSValid.userdetails);


// get the cookie incoming request
app.get('/getcookie', (req, res) => {
  //show the saved cookies
  console.log(req.cookies)
  res.send(req.cookies);
});

app.get('/deletecookie', (req, res) => {
  //show the saved cookies
  res.clearCookie('Cookie123');
});

//create DB tables
app.get('/CreateReviewTable',CreateDB.CreateReviewsTable);
app.get('/CreateTeamsTable',CreateDB.CreateTeamsTable);

//insert into DB tables
app.get("/InsertDataToTeams", CreateDB.InsertDataToTeams);

//show DB tables
app.get('/ShowReviewsTable', CreateDB.ShowReviewsTable);
app.get('/ShowTeamsTable', CreateDB.ShowTeamsTable);

//drop DB tables
app.get('/DropReviewsTable', CreateDB.DropReviewsTable);
app.get('/DropTeamsTable', CreateDB.DropTeamsTable);

