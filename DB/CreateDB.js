var SQL = require('./db');
const path = require('path');
const csv=require('csvtojson');


//create Reviews table
const CreateReviewsTable = (req,res)=> {
    var Q0 = `CREATE TABLE IF NOT EXISTS Reviews (
        code int NOT NULL PRIMARY KEY, 
        general int,
        difficulty int,
        organization int,
        professional int,
        helped int,
        recommended int,
        review varchar(500)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`;
    SQL.query(Q0,(err,mySQLres)=>{
        if (err) {
            console.log("error ", err);
            res.status(400).send({message: "error in creating Reviews table"});
            return;
        }
        console.log('created Reviews table');
        res.send("Reviews table created");
        return;
    })      
}



//drop  Reviews table 
const DropReviewsTable = (req, res)=>{
    var Q1 = "DROP TABLE Reviews";
    SQL.query(Q1, (err, mySQLres)=>{
        if (err) {
            console.log("error in droping Reviews table ", err);
            res.status(400).send({message: "error im dropping Reviews table" + err});
            return;
        }
        console.log("Reviews table drpped");
        res.send("Reviews table drpped");
        return;
    })
}



//show Reviews table
const ShowReviewsTable = (req,res)=>{
    var Q2 = "SELECT * FROM Reviews";
    SQL.query(Q2, (err, mySQLres)=>{
        if (err) {
            console.log("error in showing Reviews table ", err);
            res.send("error in showing Reviews table ");
            return;
        }
        console.log("showing Reviews table");
        res.send(mySQLres);
        return;
    })
};




//create Teams table
const CreateTeamsTable = (req,res)=> {
    var Q3 = `CREATE TABLE IF NOT EXISTS Teams (
        code int NOT NULL PRIMARY KEY,
        device varchar(50),
        anon boolean
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;`;
    SQL.query(Q3,(err,mySQLres)=>{
        if (err) {
            console.log("error ", err);
            res.status(400).send({message: "error in creating Teams table"});
            return;
        }
        console.log('created Teams table');
        res.send("Teams table created");
        return;
    })      
}



//insert into Teams table
const InsertDataToTeams= (req,res)=>{
    var Q4 = "INSERT INTO Teams SET ?";
    const csvFilePath1= path.join(__dirname, "Teams.csv");
    csv()
    .fromFile(csvFilePath1)
    .then((jsonObj)=>{
        //console.log(jsonObj);
        jsonObj.forEach(element => {
            var NewEntry = {
                "code": element.code,
                "device": element.device,
                "anon": element.anon
            }
            SQL.query(Q4, NewEntry, (err,mysqlres)=>{
                if (err) {
                    console.log("error in inserting Teams data", err);
                }
                console.log("created row sucssefuly ");
            });
        });
    })
    res.send("Teams Data read");
};



//drop  Teams table 
const DropTeamsTable = (req, res)=>{
    var Q5 = "DROP TABLE Teams";
    SQL.query(Q5, (err, mySQLres)=>{
        if (err) {
            console.log("error in droping Teams table ", err);
            res.status(400).send({message: "error im dropping Teams table" + err});
            return;
        }
        console.log("Teams table drpped");
        res.send("Teams table drpped");
        return;
    })
}



//show Teams table
const ShowTeamsTable = (req,res)=>{
    var Q6 = "SELECT * FROM Teams";
    SQL.query(Q6, (err, mySQLres)=>{
        if (err) {
            console.log("error in showing Teams table ", err);
            res.send("error in showing Teams table ");
            return;
        }
        console.log("showing Teams table");
        res.send(mySQLres);
        return;
    })
};



module.exports = {CreateReviewsTable, DropReviewsTable, ShowReviewsTable, 
    CreateTeamsTable,InsertDataToTeams, DropTeamsTable,ShowTeamsTable};