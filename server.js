require('dotenv').config();
require('./config/database')
const express = require("express");
const methodOverride = require("method-override"); // new
const app = express();
const morgan = require('morgan');
const path = require("path");

//models
const User = require("./models/user");


//middleware
app.use(morgan('dev'));
// need to put it to read the body in form
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public"))); //css

//import controller
const authCotroller = require('./controllers/authentication.js')

//==================================================

//home page
app.get('/', authCotroller.home);

//signup
app.get('/auth/sign-up', authCotroller.signUp)




//=============================================
app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on port 3000");
});