import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String },
  image: { type: String },
  provider: { type: String, default: "credentials" },
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
