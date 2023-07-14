// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv').config()

// ℹ️ Connects to the database
require('./db')

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express')

const app = express()
app.set('view engine', 'ejs');
app.use(express.static('public'));

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require('./config')(app)
require('./config/session')(app)

// default value for title local
const capitalize = require('./utils/capitalize')
const projectName = 'Module2-proyect'
const { isLoggedOut,isLoggedIn, isAdmin } = require('./middlewares/route-guard.middleware')

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`

// 👇 Start handling routes here
const indexRoutes = require('./routes/index.routes')
//app.use('/', indexRoutes)

app.get("/", (req, res, next) => {
    res.render('layout')
});

app.get("/signup", (req, res, next) => {
    res.render('auth/signup')
});

app.get("/login", (req, res, next) => {
    res.render('auth/login')
});


const activitiesRoutes = require('./routes/activities.routes')
app.use('/activities',isLoggedIn, activitiesRoutes)

const authRoutes = require('./routes/auth.routes')

app.use('/auth', isLoggedOut, authRoutes)



// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app)

module.exports = app

