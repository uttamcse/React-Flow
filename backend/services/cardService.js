

// const Card = require('../models/cardModel');


// const getAllCards = async () => {
//     try {
//         const [results] = await Card.getAll();
//         return results;
//     } catch (err) {
//         throw new Error('Error fetching cards: ' + err.message);
//     }
// };


// const addCard = async (cardData) => {
//     try {

//         const [result] = await Card.add(cardData);
//         return result.insertId;
//     } catch (err) {
//         throw new Error('Error adding card: ' + err.message);
//     }
// };



// module.exports = {
//     getAllCards,
//     addCard,
    
// };

const Card = require('../models/cardModel');

// Service to get all cards from the database
const getAllCards = async () => {
    try {
        const [results] = await Card.getAll();
        return results;
    } catch (err) {
        throw new Error('Error fetching cards: ' + err.message);
    }
};

module.exports = { getAllCards };
