// src/components/ResponseCard.jsx
import React from 'react';

const ResponseCard = ({ index, status, data, updateResponseCard }) => {
    const handleStatusChange = (e) => {
        updateResponseCard(index, e.target.value, data);
    };

    const handleDataChange = (e) => {
        updateResponseCard(index, status, e.target.value);
    };

    return (
        <div className="card">
            <h3>Response Card</h3>
            <label>Status</label>
            <input 
                type="text" 
                value={status} 
                onChange={handleStatusChange} 
                placeholder="Enter status" 
            />
            <label>Data</label>
            <input 
                type="text" 
                value={data} 
                onChange={handleDataChange} 
                placeholder="Enter data" 
            />
        </div>
    );
};

export default ResponseCard;
