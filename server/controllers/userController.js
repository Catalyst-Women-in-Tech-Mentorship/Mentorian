const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
// Register function
const registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });

    if (existingUser) {
      return res
        .status(400)
        .json({ error: "Username or email is already taken" });
    }
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

//Login function
const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const existingUser = await User.findOne({ username });

    if (!existingUser) {
      return res.status(404).json({ error: "User not found" });
    }

    const validPassword = await existingUser.comparePassword(password);

    if (!validPassword) {
      return res.status(401).json({ error: "Invalid password" });
    }
    const jwtSecretKey = process.env.JWT_SECRET_KEY;
    const token = jwt.sign({ userId: existingUser._id }, jwtSecretKey, {
      expiresIn: "5h",
    });
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const validateToken = async (req, res) => {
  let tokenHeaderKey = process.env.TOKEN_HEADER_KEY;
  let jwtSecretKey = process.env.JWT_SECRET_KEY;

  try {
    const token = req.header(tokenHeaderKey);

    const verified = jwt.verify(token, jwtSecretKey);
    if (verified) {
      return res.send("Successfully Verified");
    } else {
      // Access Denied
      return res.status(401).send(error);
    }
  } catch (error) {
    // Access Denied
    return res.status(401).send(error);
  }
};

module.exports = { registerUser, loginUser, validateToken };
