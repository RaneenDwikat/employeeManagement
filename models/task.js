const mongoose = require("mongoose")


const taskSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: String,
        enum: ["completed", 'pending', 'canceled'],
    },
    // need to add users ref
    user: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true})

module.exports=mongoose.model('Tasks',taskSchema)