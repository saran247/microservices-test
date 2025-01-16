const User = require('../models/User');


exports.createUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


exports.getUsers = async (req, res) => {
    try {
        const users = await User.find({ isActive: true });
        res.status(200).json(users);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.params.id, isActive: true });
        if (!user) {
            return res.status(404).json({ message: "User not found or has been deactivated" });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Soft Delete User
exports.softDeleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, { isActive: false }, { new: true });
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
