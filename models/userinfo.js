import mongoose, { Schema, model, models } from "mongoose";

const UserInfoSchema = new Schema(
  {
    email: { type: String, required: true, trim: true },
    phone: { type: String, trim: true, }, 
    street: { type: String, trim: true }, 
    town: { type: String, trim: true }, 
    city: { type: String, trim: true }, 
    country: { type: String, trim: true }, 
    state: { type: String, required: true, trim: true }, 
    postalCode: { type: String, trim: true }, 
  },
  { timestamps: true } 
);

const UserInfo = models?.UserInfo || mongoose.model("UserInfo", UserInfoSchema);

export default UserInfo;
