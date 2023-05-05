const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { database } = require('./database')
const overviewRoute  = require('./routes/overviewRoute')
const headersRoutes  = require('./routes/headersRoute')
const app = express();
require('dotenv').config()
database.authenticate().then(() => {
console.log('Connected to database')

}).catch(err => {
console.log('Error', err)
    process.exit(1)
})

var corsOptions = {
  origin: process.env.CORS_ORIGIN
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to codeing test." });
});

app.use("/headers", headersRoutes)
app.use("/overview", overviewRoute)
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
