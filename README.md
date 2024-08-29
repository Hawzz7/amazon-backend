# Amazon Backend
## Overview
This project is an e-commerce backend application that handles user authentication, cart functionality, and purchase history using Node.js, Express, MongoDB, and related technologies. The application includes features like user registration, login, logout, token refresh, and managing user carts and purchase history.
## Technologies Used
* Node.js: JavaScript runtime environment.
* Express.js: Web framework for building RESTful APIs.
* MongoDB: NoSQL database for data storage.
* Mongoose: ODM (Object Data Modeling) library for MongoDB and Node.js.
* JWT (jsonwebtoken): Library to manage JSON Web Tokens for authentication.
* bcrypt: Library to hash user passwords.
* dotenv: Module to load environment variables from a .env file.
* cors: Middleware to enable Cross-Origin Resource Sharing.
* cookie-parser: Middleware to parse cookies attached to the client request object.
## Project Structure
```
├── controllers/
│   ├── user.controller.js    # Handles user-related operations (register, login, logout, refresh token).
│   └── cart.controller.js    # Handles cart operations (add to cart, get purchase history).
├── middlewares/
│   ├── auth.middleware.js    # Middleware to verify JWT.
│   └── errorHandler.js       # Error handling middleware.
├── models/
│   ├── user.model.js         # Mongoose schema and model for User.
│   └── cart.model.js         # Mongoose schema and model for Cart.
├── routes/
│   ├── user.routes.js        # Routes for user-related endpoints.
│   └── cartRoutes.js         # Routes for cart-related endpoints.
├── utils/
│   ├── asyncHandler.js       # Utility to handle asynchronous errors.
│   └── ApiError.js           # Custom error handling class.
├── public/                   # Directory to serve static files.
└── app.js                    # Main application file.
```
## Endpoints
### User Routes (/users)
* POST /register: Register a new user.
* POST /login: Log in a user and return access and refresh tokens.
* POST /logout: Log out a user and clear tokens.
* POST /refresh-token: Refresh the access token using a refresh token.
### Cart Routes (/cart)
* POST /add: Add items to the cart and save purchase history.
* GET /:userId/history: Get user's purchase history.
## Environment Variables
 Create a .env file in the root directory and add the following environment variables:
```
ACCESS_TOKEN_SECRET=your_access_token_secret
REFRESH_TOKEN_SECRET=your_refresh_token_secret
CORS_ORIGIN=your_frontend_url
ACCESS_TOKEN_EXPIRY=your_access_token_expiry_time
REFRESH_TOKEN_EXPIRY=your_refresh_token_expiry_time
```
## Getting Started
### 1. Clone the Repository:
   #### For backend
   ```
   git clone https://github.com/Hawzz7/amazon-backend.git
   cd amazon_backend
   ```
   
   #### For frontend
   ```
    git clone https://github.com/Hawzz7/amazon_frontend.git
    cd amazon_frontend
   ```
### 2. Install Dependencies:
 ```
 npm install
 ```
### 3. Run the Application for both frontend and backend
```
npm run dev
```
The server will start and listen for requests on the configured port.

## Security Practices
* ``httpOnly Cookies``: Tokens are stored in httpOnly cookies to protect them from being accessed via JavaScript, reducing the risk of XSS attacks.
*  ``Password Hashing``: User passwords are hashed using bcrypt before storing them in the database.

## Error Handling
* The application uses a custom `ApiError` class to handle errors and an `errorHandler` middleware to catch and respond to errors consistently across the application.

## Contact me :-
On email:
* vicky.007.cr@gmail.com

Or connect on linkedin:
* Narendra Kumar Majhi :- https://www.linkedin.com/in/narendra-kumar-majhi-78518a206


