const mongoose = require('mongoose');

const chatbotSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Link to User model
  status: { type: String, default: 'active', enum: ['active', 'inactive'] }, // New field
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Chatbot', chatbotSchema);

