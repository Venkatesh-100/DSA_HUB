const express = require("express");
const cors = require("cors");
const ConnectDB = require('./config/dbconnect');

const app = express();

require("dotenv").config();
const port = process.env.PORT || 3002;

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//json
app.use(express.json({ extended: false }));
app.use(cors());

// Mongoose Database connection
ConnectDB();

//Routes
const UserRoute = require('./routes/user');
const problemRoute = require('./routes/problems');

app.use('/', UserRoute);
app.use('/problems' , problemRoute);

//Server listening
app.listen(port, () => {
  console.log(`Server started on port ${port}!`);
});
