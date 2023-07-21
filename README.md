# Proyect2_Homebound_Explorers

#### https://homeboundexplorers.adaptable.app

## Description

 Homebound Explorers is a convenient and user-friendly mobile app specifically designed to assist busy parents and caregivers in providing engaging and age-appropriate activities for their children, right at their fingertips. The app offers a diverse range of creative and educational activities suitable for indoor and outdoor settings, making it a reliable companion for parents looking to inspire their children's learning and play experiences while managing their busy schedules.

### (2 Models, 1 Relationship, CRUD, Auth)

## Home

Contains information intrdocutory information about the proyect.
A nav bar and a footer with links as means of navegation to diferent pages in the app.

## Sign up

 A "POST" method form with Username, email and password autentication fields. Password includes a minimum set of requirements in order for the password to be accepted.

## Log in

A "POST" method form with authenticating logic in order to create an active user section, enabling access to features in the website.

## Activities

A list of all the aviable activities in the page, a descriptive photo and text about each activity, follow by a link to the activity details. All photos are stored in cloudinary  and the database is handled via MongoDB

## Activity details

All the aviable information about the activity: Name, duration, age, materials needed, skills and steps. All the information stored in MongoDB.

## Activity update

A form to update the information of the activity.

## New activity

A form to create a new activity. You can fill : Name, Age, Duration, Materials, skills, Steps and Image.

## Profile

Basic information about the user and the information and link to the user's kids.

## Kid info

All the information aboit the kid and all the activities the kid has access to (determined by age).

## Kid update  

A form to update the kid information.

## New Kid

A form to create a new kid bound to the user. You can fill Name and Age.

## About us

Section with information regarding the page creators, business model and contact information (to be updated).

## Articles

Informative articles about Education, Home schooling, kids develop.

## Backlog

### Additional design features

A new list of activities already completed by the kids.

A form to search for older articles in the article page.

A way for user to send posible new activities to the admins

A way for user to send ideas for new activities

## Easter Egg (Harry Potter)

3 new activities related to the HP universe

## Data Structure

### index.ejs

nav bar
information about the proyect
footer


### Signup.ejs

form
navbar
footer

### login.ejs

Form
Navbar
Footer

### Activities.ejs

All the activities sorted
Link to the activities details

### Activity-details.ejs

Information about the activity
Update button
Delete button

### activity-update.ejs

Form

New-activity.ejs

Form

### profile.ejs

information about user
update button
log out button
link to the user's kids
new kid button

### profile-update.ejs

form

### kid-info.ejs

information about the kid
update button
delete button

### kid-update.ejs

form

### new-kid.ejs

form

### about-us

## Information about the proyect

## Articles

### Random articles

## layout

navbar for all pages
footer for all pages
script links

## Stylesheets

materialize.css
materialize.min.css
Style

## Task (back)

Create Repo
Add colaborator to repo
Create branches
Routes
Auth
Sign up page
Log in page
User model
Profile page
Middlewares (IsLoggIn and IsLoggedOut)
Cloudinary set up
Activity model
Activities page
Activity info page
Kids model
New kid form
Kid info page
Kid activities page
Kids in profile page
New activity page 
About us page
Adaptable deploy
Update profile
Update activity
Update kid
Delete activity
Delete kid
Logout
Articles page
Article model
Middleware (IsAdmin)
Increase password requirements
Favicon 


## Task (Styles)

Implement the materialize
Navbar
Footer
Profile page
Home page
Activities page
Kid page
Forms styling
About us
Implementation of the logo
Articles page


## Links

#### Trello (MVP) - https://trello.com/b/igxmBTgo/mvp-requirements
#### Trello (All) - https://trello.com/b/BdjZBMBq/project-2
#### GitHub - https://github.com/AleGarAlon/Module2-Proyect/tree/main/views
#### Adaptable deploy - https://homeboundexplorers.adaptable.app/
#### Slides - https://docs.google.com/presentation/d/10GkGVTrF3FQPLP6frqXhGu9K7-exCiO008SPUO79b2I/edit?usp=sharing