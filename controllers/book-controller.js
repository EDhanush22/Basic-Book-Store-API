const Book = require('../models/Book.js')

const getAllBooks = async(req,res) => {
    try {
        const allBooks = await Book.find({});
        if(allBooks.length > 0){
            res.status(200).json({
                succes :true,
                message : 'List of books fetched successfully',
                data : allBooks
            })
        } else {
            res.status(404).json({
                success : 'failure',
                message : 'No books found in database'
            }) 
        }
    } catch (error) {
        console.log(error);
         res.status(404).json({
            success : 'false',
            message : 'Something went wrong! Please try again'
        })
    }
}

const getSingleBookById = async(req,res) => {
    try {
        const getCurrentBookId = req.params.id;
        const bookDetailsByID = await Book.findById(getCurrentBookId);

        if(!bookDetailsByID) {
            return res.status(404).json({
                success : 'Failure',
                message: 'Book with the current ID is not found! Please try with a different ID'
            })
        }

        res.status(200).json({
            success: true,
            message: bookDetailsByID
        })

    } catch(error) {
        console.log(error);
        res.status(404).json({
            success : false,
            message : 'No books found in database'
        })
    }
}

const addNewBook = async(req,res) => {
    try {
        const newBookFormData = req.body;
        const newlyCreatedBook = await Book.create(newBookFormData)
        if(newBookFormData) {
            res.status(200).json({
                success: true,
                message: 'Book added',
                data: newlyCreatedBook
            })
        }
    } catch(error){
        console.log(error);
        res.status(404).json({
            success : 'failure',
            message : 'No books found in database'
        });
    }
}

const updateBook = async(req,res) => {
    try {
        const updateBookFormData = req.body;
        const getCurrentBookId = req.params.id
        const updatedBook = await Book.findByIdAndUpdate(getCurrentBookId, updateBookFormData, {
            new: true
        });
// new gives the updated book back
        if(!updatedBook) {
            res.status(404).json({
                success: false,
                message: 'Book is not found with this Id'
            })
        }

        res.status(200).json({
            success : true,
            message: 'Book updated successfully',
            data : updatedBook
        })
    } catch(error) {
        console.log(error);
        res.status(500).json({
            success : 'failure',
            message : 'No books found in database'
        })
    }
}

const deleteBook = async(req,res) => {
    try {
        const getCurrentBookId = req.params.id;
        const deletedBook = await Book.findByIdAndDelete(getCurrentBookId);

        if(!deletedBook) {
            res.status(404).json({
                succes: false,
                message: 'Book is not found with this Id'
            })
        }

        res.status(200).json({
            success : true,
            message: deletedBook
        })

    } catch (error) {
        console.log(error);
        res.status(404).json({
            success : 'failure',
            message : 'No books found in database'
        })
    }
}

module.exports = {getAllBooks,
                  getSingleBookById, 
                  addNewBook, 
                  updateBook, 
                  deleteBook
                 };