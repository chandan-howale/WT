var express = require('express');
var mysql = require('mysql');
var db = require('./dbConnect');
var session = require('express-session');
var flash = require('express-flash');
var path = require('path');
var app = express();
var bp = require('body-parser');

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(flash());
app.use(session({
    secret: '1234sctx',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 70000 }
}));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/login.html');
});

app.post('/auth', function (req, res) {
    let username = req.body.username;
    let password = req.body.password;

    if (username && password) {
        db.query('SELECT * FROM login WHERE username = ? AND password = ?', [username,
            password], function (error, results) {
                if (error) {
                    throw error;
                }
                if (results.length > 0) {
                    req.session.loggedin = true;
                    req.session.username = username;
                    res.redirect('/register');
                }
                else {
                    res.send('INCORRECT CREDENTIALS!');
                }
                res.end();
            });
    }
    else {
        res.send('Please Enter Username And Password!!...');
        res.end();
    }
});

app.get('/register', function (req, res) {
    if (req.session.loggedin) {
        res.sendFile(__dirname + '/register.html');
    } else {
        res.send('Please LOGIN..')
    }
});

app.post('/appointmentSubmit', function (req, res) {
    if (req.session.loggedin) {
        var name = req.body.name;
        var gender = req.body.gender;
        var mobile = req.body.mobile;
        var email = req.body.email;
        var date = req.body.date;
        var time = req.body.time;
        var reason = req.body.reason;
        var sql = `INSERT INTO appointmentform(name,gender,mobile,email,date,time,reason) values("${name}",
"${gender}", "${mobile}", "${email}", "${date}", "${time}", "${reason}")`;

        db.query(sql, function (err, result) {
            if (err) {
                throw err;
            }
            console.log('RECORD INSERTED!!..');
            req.flash('success', 'DATA ADDED SUCESSFULLY');
            res.redirect('/register');
        });
    }
    else {
        res.send('PLEASE LOGIN TO VIEW THIS PAGE');
    }
});

app.get('/logout', function (req, res) {
    req.session.destroy((err) => {
        if (err) throw err;
        res.redirect('/thankYou')
    });
});

app.get('/thankYou', (req, res) => {
    res.sendFile(path.join(__dirname, 'thankYou.html'));
});

app.listen(3001, () => {
    console.log("SERVER IS RUNNING..")
}) 