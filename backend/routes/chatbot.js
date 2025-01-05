const express = require('express');
const Chatbot = require('../models/Chatbot');
const router = express.Router();
const authMiddleware = require('../middleware/auth'); // Middleware to protect routes

// Create a new chatbot
router.post('/', authMiddleware, async (req, res) => {
  try {
    const chatbot = await Chatbot.create({ ...req.body, creator: req.user.id });
    res.status(201).json(chatbot);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all chatbots for a user
router.get('/', authMiddleware, async (req, res) => {
  try {
    const chatbots = await Chatbot.find({ creator: req.user.id });
    res.status(200).json(chatbots);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get a specific chatbot by ID
router.get('/:id', authMiddleware, async (req, res) => {
  try {
    const chatbot = await Chatbot.findById(req.params.id);
    if (!chatbot || chatbot.creator.toString() !== req.user.id) {
      return res.status(404).json({ error: 'Chatbot not found' });
    }
    res.status(200).json(chatbot);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a chatbot
router.put('/:id', authMiddleware, async (req, res) => {
  try {
    const chatbot = await Chatbot.findById(req.params.id);
    if (!chatbot || chatbot.creator.toString() !== req.user.id) {
      return res.status(404).json({ error: 'Chatbot not found' });
    }
    Object.assign(chatbot, req.body);
    await chatbot.save();
    res.status(200).json(chatbot);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Delete a chatbot
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const chatbot = await Chatbot.findById(req.params.id);
    if (!chatbot || chatbot.creator.toString() !== req.user.id) {
      return res.status(404).json({ error: 'Chatbot not found' });
    }
    await chatbot.remove();
    res.status(200).json({ message: 'Chatbot deleted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

