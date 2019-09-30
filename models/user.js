const mongoose = require("mongoose");
const Joi = require("@hapi/joi");
const config = require("config");

const userSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true
  },
  isEmailVerified: {
    type: Boolean,
    default: false
  }
});

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = {
    userId: Joi.objectId().required(),
    isEmailVerified: Joi.boolean().default(false)
  };

  return Joi.validate(user, schema);
}

exports.User = User;
exports.userSchema = userSchema;
exports.validate = validateUser;
