# LearnLink

Once you clone the repository, please create a .env file within the root directory.
you will need to do npm install inside the root directory, client directory and server directory all separately.
.env file needs to have the following values:
COMMAND FOR CREATING THE SECRET KEY IN YOUR CODE: `openssl rand -base64 32
`
_JWT_SECRET_KEY
_ PORT \* MONGO_URI

Backend configuration summary:

- **controllers folder** - handles the logic of the application --> how the application responds to HTTP requests - This is where the POST, PATCH, DELETE requests + associated logic goes - What interacts with the models and database based on requests made by user/application

- **middlewares folder**

  - these functions operate during the request cycle
  - these are the functions that perform AUTH, Logging and Error Handling
  - can be applied globally or to specific routes
  - can be used to modify requests or request logic

- **routes folder**

  - this is where you declare the api endpoints for the app as well as the methods for the specific endpoints.
  - Controller methods are imported into the files to handle to logic once the request has been sent to a specific endpoint

- models folder

  - pretty straight forward, this is where the models are created and stored.
  - models do need to be imported into various places in the backend in order to use properly.

- **server.js file (lines that might not make sense at first glance)**
  - the 'app.use' lines in the server.js file are what configure the middlewares for the app
  - the order things are entered in this file does matter. Please note we configure the backend server, then configure middlewares then connect to the database.
    - once connected to the database the 'require('./models.....')' code is where we import/create(if they dont already exist) the models
  - next we import and configure the routes by first declaring and then calling them with app.use
  - the const port = is simply declaring the address of the backend server.

## Setup Server

1. Pull from git repo
2. Go to `LearnLink/server` file
3. Run `npm install`
4. Run `touch .env`
5. Open the new `.env` file and insert the following

   ```
   MONGO_URI = `**Insert URI with account info/ route info**`
   JWT_SECRET_KEY = **Insert Generated JWT Key**
   PORT = 5000
   ```

6. Run `npm run start`
