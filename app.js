// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require('dotenv').config()

// ℹ️ Connects to the database
require('./db')

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require('express')

const app = express()
const path      = require("path");
const expressLayouts = require("express-ejs-layouts"); 
 
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(expressLayouts);

// Disable caching for the routes that render your pages
app.use((req, res, next) => {
    res.header('Cache-Control', 'no-store');
    next();
  });
  

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
app.get('/', (req, res) => {
    // Render the home page using the layout.ejs file
    res.render('pages/index');
  });
  
  app.get('/signup', (req, res) => {
    // Render the signup page using the signup.ejs file
    res.render('auth/signup');
  });
  
  app.get('/login', (req, res) => {
    // Render the login page using the login.ejs file
    res.render('auth/login');
  });
  
  app.get('/about-us', (req, res) => {
    // Render the login page using the login.ejs file
    res.render('partials/about-us');
  });


const activitiesRoutes = require('./routes/activities.routes')
app.use('/activities',isLoggedIn, activitiesRoutes)

const authRoutes = require('./routes/auth.routes')

app.use('/auth', isLoggedOut, authRoutes)



// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require('./error-handling')(app)

module.exports = app

