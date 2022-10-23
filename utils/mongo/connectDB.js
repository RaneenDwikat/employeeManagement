const mongoose = require('mongoose')
require('dotenv').config()
const userName=process.env.MONGO_USERNAME
const password=process.env.MONGO_PASSWORD
console.log(userName)
console.log(password)
const database= `mongodb+srv://${userName}:${password}@cluster0.pjp0ilf.mongodb.net/?retryWrites=true&w=majority`

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