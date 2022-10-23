const mongoose = require("mongoose")
const Tasks=require('./task')
const userValidator=require('../validation/user')

const userSchema=new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
     salary: {
        type: Number,
        required: true
    },
})


userSchema.pre("deleteOne", async(next)=>{
    try {
        await Tasks.deleteMany({
          owner: this._id
        })
        next()
    } catch (error) {
        next(error)
    }
})



module.exports=mongoose.model('User',userSchema)


