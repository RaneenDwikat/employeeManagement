import mongoose from 'mongoose';

// 1. Create an interface representing a document in MongoDB.
interface Admin {
  email: string;
  password: string;
}

// 2. Create a Schema corresponding to the document interface.
const adminSchema = new mongoose.Schema<Admin>({
  email: { type: String, required: true },
  password: { type: String, required: true },
},{timestamps:true});

// 3. Create a Model.
export  default mongoose.model<Admin>('Admins', adminSchema);
