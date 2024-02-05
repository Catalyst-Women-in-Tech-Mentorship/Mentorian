const User = require('../models/userModel');

// Register function
const registerUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    
        if (existingUser) {
          return res.status(400).json({ error: 'Username or email is already taken' });
        }
        const newUser = new User({ username, email, password });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
  };
  
  //Login function
  const loginUser = async (req, res) => {
    // Implementation for user login
  };
  
  module.exports = { registerUser, loginUser };