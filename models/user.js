const mongoose = require("mongoose")

const userSchema=new mongoose.Schema({
    
    name: {
        type: String
    },
     salary: {
        type: Number
    },
    /**
    * @tasks need  to remove from here
    */
    tasks:{
        type: Array
    },
}, {timestamps: true})
module.exports=mongoose.model('User',userSchema)


