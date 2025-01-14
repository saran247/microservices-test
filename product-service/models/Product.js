const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    isActive: { type: Boolean, default: true }, // For soft delete
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
 