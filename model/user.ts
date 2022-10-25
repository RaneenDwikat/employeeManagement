import mongoose from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface User {
  name: string;
  salary: number;
}

// 2. Create a Schema corresponding to the document interface.
const userSchema = new mongoose.Schema<User>({
  name: { type: String, required: true },
  salary: { type: Number, required: true },
});

// 3. Create a Model.
export default mongoose.model<User>('Users', userSchema);
