Inventory Management System
Overview

The Inventory Management System is a full-stack web application developed using the MERN stack. The application is designed to manage products in a store by allowing users to add, view, update, and delete inventory items. It provides a simple and efficient way to handle product data through a RESTful API and a React-based user interface.

Features

User authentication using email and password

Dashboard for managing inventory

Add new products to inventory

View all available products

Update product quantity

Delete products from inventory

RESTful API architecture

Frontend and backend separation

Technology Stack
Frontend

React

JavaScript

HTML

CSS

Backend

Node.js

Express.js

MongoDB

Mongoose

JSON Web Token (JWT)

CORS

Project Structure
inventory-management-system/
├── client/
│   ├── src/
│   │   ├── Components/
│   │   ├── App.js
│   │   └── index.js
│   └── package.json
│
├── server/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md

Installation and Setup
Clone the Repository
git clone https://github.com/Abhishek234-cpu/inventory-management-system.git
cd inventory-management-system

Backend Setup
cd server
npm install


Create a .env file inside the server directory with the following content:

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/inventorydb
JWT_SECRET=secret123


Start the backend server:

node server.js


The backend server runs on port 5000.

Frontend Setup
cd client
npm install
npm start


The frontend application runs on port 3000.

API Endpoints
Authentication

POST /api/auth/login

Products

POST /api/products

GET /api/products

PUT /api/products/:id

DELETE /api/products/:id

Sample Product Data
{
  "name": "Laptop",
  "price": 50000,
  "quantity": 10,
  "category": "Electronics"
}

Usage Instructions

Ensure MongoDB is running locally.

Start the backend server.

Start the frontend application.

Log in using valid credentials.

Access the dashboard to manage products.

Future Enhancements

Role-based access control

Product search and filtering

Pagination for large datasets

Improved user interface design

Deployment to cloud platforms

Order management functionality

Learning Outcomes

This project demonstrates practical experience in:

Full-stack application development

REST API design and implementation

MongoDB database integration

React component-based architecture

Authentication and authorization

Git and GitHub version control

Author

Abhishek NM
GitHub: https://github.com/Abhishek234-cpu
