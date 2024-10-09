// controllers/cardController.js
const cardService = require('../services/cardService');

// Controller for fetching all cards
exports.getAllCards = async (req, res) => {
    try {
        const cards = await cardService.getAllCards();
        res.json(cards);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Controller for adding a new card
exports.addCard = async (req, res) => {
    try {
        const newCard = req.body;
        const cardId = await cardService.addCard(newCard);
        res.status(201).json({ id: cardId, ...newCard });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
