require('dotenv').config();  // loads .env files into process.env b default
const express = require('express');
const connectToDB = require('./database/db.js')
const bookRoutes = require('./routes/book-routes.js')

const app = express();
const PORT = process.env.PORT || 3000;

// connect to our databse 
connectToDB();

//middleware -> express.json
app.use(express.json());

//routes here
app.use('/api/books', bookRoutes) // parent route
// '/api/books/delete/125' this is how we call

app.listen(PORT ,() =>{
    console.log(`Server is runnning on Port ${PORT}`)
});