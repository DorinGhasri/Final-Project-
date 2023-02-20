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
        if (results.length != 0){ //found the review in the db- it already exists
            res.render('ReviewPage', {Code: "כבר נעשה שימוש בקוד משתמש זה"});
        }
        else{
            sql.query("INSERT INTO Reviews SET ?", newReview, (err, mysqlres) => {
                if (err) {
                    console.log("error: ", err);
                    res.status(400).send({message: "error in creating review: " + err});
                    return;
                }
                console.log("new review added successfully");
                res.render("GoodbyePage");
                return;
            });
        }
    });
};


module.exports = {createNewReview};