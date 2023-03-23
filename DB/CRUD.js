const sql = require("./db.js");
var path = require("path");
const e = require("express");
var url = require('url');
//const JSFunc = require('./funcs');



// Create a new Review
const createNewReview = function(req,res){
    if (!req.body) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }
    const newReview = {
        "code": req.cookies.code,
        "general": req.body.general.length > 0 ? req.body.general : null ,
        "difficulty":req.body.difficulty.length> 0 ? req.body.difficulty : null,
        "organization":req.body.organization.length> 0 ? req.body.organization : null,
        "professional":req.body.professional.length> 0 ? req.body.professional : null,
        "helped":req.body.helped.length> 0 ?req.body.helped : null,
        "recommended":req.body.recommended.length> 0 ? req.body.recommended : null,
        "review":req.body.review.length> 0 ?req.body.review: null,
    };
    console.log(newReview);

    sql.query("SELECT code FROM Reviews WHERE code like ?" , newReview.code , (err, results) => {
        if (err){
            console.log("error: ", err);
            res.status(400).send({message: "error in creating review: " + err});
            return;
        }
        sql.query("INSERT INTO Reviews SET ?", newReview, (err, mysqlres) => {
            if (err) {
                console.log("error: ", err);
                res.status(400).send({message: "error in creating review: " + err});
                return;
            }
            if(results.length<2){
                console.log("קטן מ-3");
                res.render("ChooseCoursePage");
            }else {
                console.log("גדול שווה ל-3");
                res.render("GoodbyePage");
            }
            console.log("new review added successfully");

           // if (req.body.button1 === "OneMoreReviewBut") {
            return;
        });
        
    });
};



// Create a new Course
const createNewCourse = function(req,res){
    if (!req.body) {
        res.status(400).send({message: "Content can not be empty!"});
        return;
    }
    
    const newCourse = {
        "code": req.cookies.code,
        "course": req.body.courseName !== undefined ? req.body.courseName : req.body.courseNameText,
    };
    console.log(newCourse);

    sql.query("SELECT code FROM Courses WHERE code LIKE ? AND course LIKE ?", [`%${newCourse.code}%`, `%${newCourse.course}%`], (err, results) => {

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
            sql.query("SELECT code FROM Courses WHERE code like ?" , newCourse.code , (err, results) => {
                if (err){
                    console.log("error: ", err);
                    res.status(400).send({message: "error in creating course: " + err});
                    return;
                }
                sql.query("INSERT INTO Courses SET ?", newCourse, (err, mysqlres) => {
                    if (err) {
                        console.log("error: ", err);
                        res.status(400).send({message: "error in creating course: " + err});
                        return;
                    }
                    
                    if(req.cookies.Anon == 'true' && req.cookies){
                        res.render("ReviewPage",{AnonMessage: "*ביקורות האתר הינן אנונימיות"});
                      }else if(req.cookies.Anon =='false') {
                        res.render("ReviewPage");
                      }
                });
                
            });
        }
    
    });

};






module.exports = {createNewReview, createNewCourse};