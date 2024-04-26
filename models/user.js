const mongoose=require('mongoose');

const Schema = mongoose.Schema;

const emailValidator = (value) => {
    // Regular expression for email validation
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(value);
  };
  
const userSchema = Schema({
  username: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
    
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
        validator: emailValidator,
        message: 'Invalid email format',
      },
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", userSchema);
module.exports = User;

