# Event Manager https://travis-ci.org/travis-ci/travis-web.svg?branch=daily-cron
Andela Pre-Bootcamp "Developer Challenge"

Given you manage an events center, this app will help you accept applications to use your center / facilities, and will either decline events when the proposed day is already taken, or suggest an available day
Create a Pivotal Tracker Board  

# Install dependencies
npm install

# Serve at localhost:8000
npm run start:dev

### The client-side and server-side features are as follows:
- User signup and signin pages.
- A page where an authenticated user can add a new event.
- A page, section or view where an authenticated user can
- Modify the event he/she added
- Delete the event he/she added
- A page where an admin can add a new center
- A page, section or view where an admin can modify the details of a center
- A page showing the details of a center and the events slated for that center

### API endpoints are used to:  
- Create an event
- Modify an event
- Delete an event
- Add a new center
- Modify the details of a center
- Get all the centers
- Get the details of a center

### Secure API endpoints are used to:
- Create user accounts that can signin/signout from the app. (Using token based authentication with JSON Web Tokens)
- Apply necessary security to privileged  API endpoints using JSON Web Tokens

### Also API endpoints use real data from a database

### ReactJS / Redux are used as the frontend framework

### Extra features
- Users would receive mail notification when the admin cancels his or her event.
- Users would be able to search for centers using Name and location.
- Users would be able to filter search based on facilities e.g projector, number of chairs etc.
- Users would be able to see the dates booked


## Technologies used:
- HTML/CSS
- NodeJS
- ReactJS
- Javascript / ES6

## Prerequisites
Ensure you install the necessary software tools, mainly: Git, Sublime Text and NodeJS

## Author
Fakunle Mayowa Samuel - Andela Developer Challenge
