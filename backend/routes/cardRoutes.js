const express = require('express');
const router = express.Router();
const cardService = require('../services/cardService');

// GET route to fetch all cards
router.get('/', async (req, res) => {
    try {
        const cards = await cardService.getAllCards(); // Fetch from the service layer
        res.json(cards);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch cards' });
    }
});

module.exports = router;
