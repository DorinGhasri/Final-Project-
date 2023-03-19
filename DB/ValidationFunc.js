
const sql = require("./db.js");
var path = require("path");
const e = require("express");
var url = require('url');
const userAgent = require('user-agent');
const CRUD = require("./CRUD"); 

// user validation - is the user entering from the right device?
const CodeValidation = function(req,res){
    if (!req.body) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }
    const newUser = {
        "code":req.query.code,
    };
    console.log(newUser);
    res.cookie('code',req.query.code);


    sql.query("SELECT code FROM Teams WHERE code like ?" , newUser.code , (err, results) => {
      if (err){
        console.log("error: ", err);
        res.status(400).send({message: "error in code: " + err});
        return;
      }

      if (results.length == 0){ //found the code in the reviews table - it already exists
            res.render('HomePage', {InvalidCode: "קוד זה אינו קיים"});

      }else{
          checkIfAnon(newUser.code) //check if the device being used matches wanted device
          .then((isAnon) => {
              res.cookie('Anon',isAnon);
              console.log(isAnon);
          })
          .catch((err) => {
              console.log("error: ", err);
              res.status(400).send({ message: "error in code: " + err });
          });

          var Mobile = checkMobile(req);//check if the device being used is mobile
          checkDeviceValidity(Mobile, newUser.code) //check if the device being used matches wanted device
          .then((validUserDevice) => {
              if (!validUserDevice) {
                  res.render("HomePage", {wrongDevice: "לא נכנסת מהמכשיר הנכון, אנא הכנס מהמכשיר המבוקש"});
              } else {
                checkIfAnon(newUser.code) //check if the device being used matches wanted device
                  .then((isAnon) => {
                    if(isAnon === true){
                      res.render("ChooseCoursePage");
                    }else{
                      res.render("IdentificationPage");
                    }
                  })   
                }
          })
          .catch((err) => {
              console.log("error: ", err);
              res.status(400).send({ message: "error in code: " + err });
          });
      
        }

    });
};

//compare device being used to wanted device
function checkDeviceValidity(mobile, code) {
    return new Promise((resolve, reject) => {
      sql.query("SELECT * FROM Teams WHERE code like ?", code, (err, results) => {
        if (err) {
          console.log("error: ", err);
          reject(err);
          return;
        }
  
        let deviceType = results.length > 0 ? results[0].device : null;
        console.log(results[0].device);
        let isValidDevice = false;
  
        if (mobile) {
          isValidDevice = deviceType === "Mobile";
        } else {
          isValidDevice = deviceType === "PC";
        }
  
        resolve(isValidDevice);
      });
    });
}

//Check device type function
function checkMobile(req) {
    const agent = userAgent.parse(req.headers['user-agent']);
    const agent2 = JSON.stringify(agent)
    if (agent2.includes("Mobile")) {
        return true;
    }
    return false;
  }

//ANON
function checkIfAnon(code) {
    return new Promise((resolve, reject) => {
      sql.query("SELECT * FROM Teams WHERE code like ?", code, (err, results) => {
        if (err) {
          //res.render('HomePage', {CodeUsed: "קוד זה אינו קיים"});
          console.log("error: ", err);
          reject(err);
          return;
        }
  
        let AnonType = results.length > 0 ? results[0].anon : null;
        console.log(results[0].anon);
        let isAnon = false;
        
        if (AnonType === 1) {
            isAnon = true;
          } else {
            isAnon = false;
          }
          console.log(isAnon);
        resolve(isAnon);
      });
    });
}



/*
const CourseValidation = function(req,res){
  if (!req.body) {
      res.status(400).send({message: "Content can not be empty!"});
      return;
  }
  console.log(req.query.courseName);
  const newChosenCourse = {
      "code": req.cookies.code,
      "course":req.query.courseName,
  };

  console.log(newChosenCourse);

  
  sql.query("SELECT code FROM Courses WHERE code LIKE ? AND course LIKE ?", [newChosenCourse.code, newChosenCourse.course], (err, results) => {
    if (err){
      console.log("error: ", err);
      res.status(400).send({message: "error in code: " + err});
      return;
    }
    console.log("עכשיו תוצאות")
    console.log(results);

    if (results.length != 0){ //found the code in the reviews table - it already exists

      res.render('ChooseCoursePage', {InvalidCourse:"לא ניתן לתת ביקורת פעמיים על אותו הקורס, אנא בחר קורס אחר"})    

    }else{
          res.render("ReviewPage");
        }

  });

};
*/

module.exports = {CodeValidation};




