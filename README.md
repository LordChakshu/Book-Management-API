# Book Management API

This is a simple API for managing books. It provides CRUD (Create, Read, Update, Delete) operations for book entries, along with authentication for user access.

## Table of Contents

- [Features](#features)
- [Endpoints](#endpoints)
- [Authentication](#authentication)
- [Getting Started](#getting-started)
- [Dependencies](#dependencies)


## Features

- User authentication with JWT tokens.
- CRUD operations for managing book entries (title, author, publication year).
- Filtering books by author or publication year.


## Endpoints

- POST /books/submit: Create a new book entry.
- GET /books/all: Retrieve a list of all books.
- PUT /books/update/:bookId: Update an existing book entry.
- DELETE /books/delete/:bookId: Delete an existing book entry.
- GET /books/author/:author: Filter books by author.
- GET /books/publicationYear/:publicationYear: Filter books by publication year.

## Authentication

To access protected endpoints, you need to include a valid JWT token in the Authorization header of your requests. You can obtain a token by logging in with valid credentials.

## Getting Started

1. Clone this repository.
2. Install dependencies using `npm install`.
3. Set up your MongoDB database and configure the connection in `config/db.js`.
4. Create a `.env` file and add your JWT secret key and MongoDB connection URI.
5. Start the server using `npm start`.
6. You can now access the API endpoints using a tool like Postman or Thunder Client.

## Dependencies

- express
- mongoose
- bcryptjs
- jsonwebtoken
- body-parser

