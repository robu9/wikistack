// import { Sequelize } from "sequelize/types";

const express = require("express");
const router = express.Router()
const morgan = require("morgan");
const app = express();
const {db} = require('./models');
const wikiRouter = require('./routes/wiki');
const userRouter = require('./routes/user');

// console.log(wikiRouter);

// const models = require('./models)');

const layout = require("./views/layout");

app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(morgan("dev"));
app.use(express.static(__dirname + "/public"));

app.use('/wiki', wikiRouter);

// veryfying if connection to db is working
db.authenticate().
then(() => {
  console.log('connected to the database');
});

// await sequelize.sync({ force: true });
// console.log("All models were synchronized successfully.")

// router.get("/wiki", (req, res, next) => {
//     res.send(layout('hellohello'));
// });

app.get("/", (req, res) => {
    res.redirect("/wiki");
})

const init = async () => {
    await db.sync({force: true});
    
    // await models.User.sync();
    // await models.Page.sync();
    const PORT = 8080;

    app.listen(PORT, () => {
        console.log(`App listening in port ${PORT}`);
    });

}

init();

// module.exports = '';