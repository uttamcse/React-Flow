const db = require('../config/db');

// Get all cards from the database
exports.getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM cards', (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};


exports.add = (cardData) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO cards SET ?', cardData, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};
const db = require('../config/db');

// Get all cards from the database
exports.getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM cards', (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        });
    });
};
