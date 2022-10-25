import mongoose from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface Task {
    title: string;
    description: string;
    status: string;
    owner: mongoose.ObjectId;
}

// 2. Create a Schema corresponding to the document interface.
const taskSchema = new mongoose.Schema<Task>({
    title: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: String,
        enum:['cancelled','completed','pending']
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users",
    }
});

// 3. Create a Model.
export default mongoose.model<Task>('Tasks', taskSchema);
