// Import the User model
import User from "../model/userModel.js";
import mongoose from "mongoose";

// Create User
export const create = async (req, res) => {
  try {
    const { name, email, address } = req.body;

    // Input validation
    if (!name || !email || !address) {
      return res.status(400).json({ message: "All fields are required." });
    }

    // Check duplicate email
    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(409).json({ message: "User already exists." });
    }

    // Save user
    const newUser = await User.create({ name, email, address });
    return res.status(201).json(newUser);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error." });
  }
};

// Get All Users
export const fetch = async (req, res) => {
  try {
    const users = await User.find();

    if (!users.length) {
      return res.status(404).json({ message: "No users found." });
    }

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error." });
  }
};

// Update User
export const update = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB Object ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid user ID." });
    }

    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    return res.status(200).json(updatedUser);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error." });
  }
};

// Delete User
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB Object ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid user ID." });
    }

    const deletedUser = await User.findByIdAndDelete(id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found." });
    }

    return res.status(200).json({ message: "User deleted successfully." });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error." });
  }
};
