const { Schema, model, models, default: mongoose } = require("mongoose");

const UserSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      required: [true, "Please write your full-name"],
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Please provide a valid-email"],
    },
    password: {
      type: String,
      trim: true,
      required: [true, "Please provide a password"],
    },
    image: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const User = models?.User || mongoose.model("User", UserSchema);

export default User;
