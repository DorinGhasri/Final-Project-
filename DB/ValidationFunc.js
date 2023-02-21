
const sql = require("./db.js");
var path = require("path");
const e = require("express");
var url = require('url');
const userAgent = require('user-agent');


// user validation - is the user entering from the right device?
const userdetails = function(req,res){
    if (!req.body) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }
    const newUser = {
        "code":req.query.code,
    };
    console.log(newUser);
    res.cookie('code',req.query.code);

    checkIfAnon(newUser.code) //check if the device being used matches wanted device
    .then((isAnon) => {
        res.cookie('Anon',isAnon);
        console.log(isAnon);
    })
    .catch((err) => {
        console.log("error: ", err);
        res.status(400).send({ message: "error in code: " + err });
    });



    

    sql.query("SELECT code FROM Reviews WHERE code like ?" , newUser.code , (err, results) => {
        if (err){
            console.log("error: ", err);
            res.status(400).send({message: "error in code: " + err});
            return;
        }
        if (results.length != 0){ //found the code in the reviews table - it already exists
            res.render('IdentificationPage', {CodeUsed: "כבר נעשה שימוש בקוד משתמש זה"});
        }
        else{
            var Mobile = checkMobile(req);//check if the device being used is mobile
            checkDeviceValidity(Mobile, newUser.code) //check if the device being used matches wanted device
            .then((validUserDevice) => {
                if (!validUserDevice) {
                    res.render("IdentificationPage", {wrongDevice: "לא נכנסת מהמכשיר הנכון, אנא הכנס מהמכשיר המבוקש"});
                } else {
                        res.render("ChooseCoursePage");
                    
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


module.exports = {userdetails};




