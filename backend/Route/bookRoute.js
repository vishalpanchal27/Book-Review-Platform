const express = require('express');
const router = express.Router();
const { createBook, getAllBooks, getBookById, updateBook, deleteBook } = require("../Models/CURD-controller")
// Define routes
router.post('/postBook', createBook);
router.get('/getBooks', getAllBooks);
router.get('/books/:id', getBookById);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);

module.exports = router;
