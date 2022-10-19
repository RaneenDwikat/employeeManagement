const mongoose = require('mongoose')

const database= "mongodb+srv://raneendwikat:1652000@cluster0.pjp0ilf.mongodb.net/?retryWrites=true&w=majority"

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(database)
        console.log('Connected!')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
module.exports = connectDB