const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type : String,
        required : [true, 'Book title is required'],  // validation message if missing
        trim : true, // removes extra space from both sides
        maxLength : [100, 'Book title cannot be more than 100 characters']
    }, 
     author: {
        type : String,
        required : [true, 'Author name is required'],
        trim : true, 
    },
    year : {
        type : Number,
        required : [true, 'Publication year is requires'],
        min : [1000, 'Year must be atleast 1000'],
        max : [new Date().getFullYear(), 'Year cannot be in the future']
    },
    createdAt: {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model('Book', BookSchema);

// Bookis thee model in mongoDb it is converted to 'books',