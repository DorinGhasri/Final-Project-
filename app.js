const app = require("express")();
//process = require('process')

//const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello Naama and Lior !!! :)");
});

app.listen(process.env.PORT || 3000);

