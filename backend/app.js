require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
const fs = require('fs')
var indexRouter = require('./routes/index');
var testRouter = require('./routes/test');
const { normalizePort } = require('./utils/portHandler');
const session = require('express-session');
var cors = require('cors')
var app = express();
const corsOptions = {
    origin: process.env.STAGE == "prod" ? "https://pdfgenz.netlify.app" : 'http://localhost:5173',
    credentials: true, // Allow credentials, such as cookies
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    name: "clientId",
    secret: "secrettoken",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60000, // Set the session expiry to 60 seconds (in milliseconds)
    },
}));
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/t/', testRouter);


var port = normalizePort(process.env.PORT || 5000);

app.listen(port, () => {
    console.log('Server is running on PORT 5000');
});
module.exports = app;
