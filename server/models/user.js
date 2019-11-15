import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    isRequired: true
  },
  hash: {
    type: String,
    isRequired: true
  },
  salt: {
    type: String,
    isRequired: true
  }
});

export default mongoose.model('User', UserSchema);
