const express = require('express')
const {getAllBooks, getSingleBookById, updateBook, deleteBook, addNewBook} = require('../controllers/book-controller.js')
// importing the above functions

// Create expres router
const router = express.Router()

// all the routes that are related to books only
router.get('/get', getAllBooks); // here we pass the controller,these all are individual routes
router.get('/get/:id', getSingleBookById);
router.post('/add', addNewBook);
router.put('/update/:id', updateBook);
router.delete('/delete/:id', deleteBook);

module.exports = router; //always export the router so we can use in server.js
