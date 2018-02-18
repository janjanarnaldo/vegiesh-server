import mongoose, { Schema } from 'mongoose';

// Define client schema
const clientSchema = new Schema({
  name: String,
  address: String,
  telNum: String,
  balance: Number,
});

export default mongoose.model('client', clientSchema);
