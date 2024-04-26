const express = require('express');

const router = express.Router();

const bookController = require('../controller/bookController');
const authMiddleware = require('../utils/authMiddleware');

// Endpoint to submit a new book
router.post('/submit', authMiddleware.authenticate, bookController.createBook);

// Endpoint to get all books
router.get('/all', bookController.getAllBooks);

// Endpoint to update a book by ID 
router.put('/update/:bookId', authMiddleware.authenticate, bookController.updateBook);

// Endpoint to delete a book by ID
router.delete('/delete/:bookId', authMiddleware.authenticate, bookController.deleteBook);

// Endpoint to get books by author
router.get('/author/:author', authMiddleware.authenticate, bookController.getBooksByAuthor);

// Endpoint to get books by publication year
router.get('/publicationYear/:publicationYear', authMiddleware.authenticate, bookController.getBooksByPublicationYear);

module.exports = router;
