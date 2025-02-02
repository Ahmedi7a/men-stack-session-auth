const User = require('../models/user')


// (/)
 async function home (req, res) {
    res.render("index.ejs", {title: 'My App'});
};

function signUp (req, res){
    res.render('auth/sign-up.ejs', {title: 'Sign up'});
}




//=========================
module.exports = {
    home,
    signUp,
}