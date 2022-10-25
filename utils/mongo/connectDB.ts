import mongoose from 'mongoose'
import config from '../../config/config.config'

// require('dotenv').config()
const userName=config.mongo.username
const password=config.mongo.password

const database= `mongodb+srv://${userName}:${password}@cluster0.pjp0ilf.mongodb.net/?retryWrites=true&w=majority`

 export  async function connectDB ():Promise<void> {
    try {
        const conn = await mongoose.connect(database)
        console.log('Connected!')
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}
