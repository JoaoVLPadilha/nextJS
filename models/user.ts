import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists'],
    required: [true, 'Email already exists'],
  },
  username: {
    type: String,
    unique: [true, 'Username already exists'],
    required: [true, 'Username already exists'],
  },
  image: {
    type: String,
  },
});

const User = models.User || model('User', UserSchema);
export default User;  
