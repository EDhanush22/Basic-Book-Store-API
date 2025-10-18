const mongoose = require('mongoose')

const connectToDB = async() => {
    try {
        await mongoose.connect('mongodb+srv://dhanush22:dhanush22@bookdevelopementapi.flw5cbi.mongodb.net/?retryWrites=true&w=majority&appName=BookDevelopementAPI');
        console.log('mongodb is connected successfully')
    } catch(error) {
        console.error('Mongodb connection failed', error)
        process.exit(1) // stops if DB fails
    }
}

module.exports = connectToDB;