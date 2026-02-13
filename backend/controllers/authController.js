const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  try {
    const { name, email, password, phone, gender, age, address } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phone,
      gender,
      age,
      address,
    });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

  // login caliing
  exports.login = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: "Email and Password are required" });
      }
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ message: "User Not Found" });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid Credentials" });
      } 
      res.status(200).json({ message: "Login Successful"});
    } catch (err) {
      console.error("Login Error",err);
      res.status(500).json({ message: "Server error" });
    }
};
// get user data 
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find().select("-password");
    //this password uses to hide the password
    res.status(200).json(users);
  } catch (err) {
    console.error("getUsers error",err);
    res.status(500).json({ message: "Server error" });
  }
};

// UPDATE USER
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, phone, gender , age, address } = req.body;
    const user = await User.findByIdAndUpdate(
      id,
      { name, email, phone, gender, age, address },
      { new: true }
    ).select("-password");

    res.status(200).json(updatedUser);
  } catch (err) {
    console.error("updateUser error", err);
    res.status(500).json({ message: "Server error" });
  }
};

// DELETE USER
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;  
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.error("deleteUser error", err);
    res.status(500).json({ message: "Server error" });
  }
};

//Image storing and retrieving 
exports.uploadProfileImage = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndUpdate(
      id
    , { profileImage: req.file.path },
      { new: true }
    );
    res.json(user);
  } catch (err) {
    console.error("uploadProfileImage error", err);
    res.status(500).json({ message: "Image upload failed" });
  }
};
