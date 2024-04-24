import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
    minlength: 3,
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    minlength: 5,
  },
});

const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
