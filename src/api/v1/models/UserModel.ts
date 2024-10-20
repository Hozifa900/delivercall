import { Schema, model } from "mongoose";
const bcrypt = require("bcryptjs");

interface IUser {
  username: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Hash password before saving
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.comparePassword = async function (password: String) {
  return await bcrypt.compare(password, this.password);
};

const User = model<IUser>("User", userSchema);

export { User, IUser };
