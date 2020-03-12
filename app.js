const express = require("express");
const morgan = require("morgan");
const app = express();
const {db} = require('./models');
const layout = require("./views/layout");


app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

// veryfying if connection to db is working
db.authenticate().
then(() => {
  console.log('connected to the database');
});


app.get("/", (req, res, next) => {
    res.send(layout('hellohello'));
});


const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
