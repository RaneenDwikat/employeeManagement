const mongoose = require("mongoose")

const userSchema=new mongoose.Schema({
    
    name: {
        type: String
    },
     salary: {
        type: Number
    },
    tasks:{
        type: Array
    }
})
module.exports=mongoose.model('User',userSchema)


