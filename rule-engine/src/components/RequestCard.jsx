// src/components/RequestCard.jsx
import React from 'react';

const RequestCard = ({ index, contextName, updateRequestCard }) => {
    const handleInputChange = (e) => {
        updateRequestCard(index, e.target.value);
    };

    return (
        <div className="card">
            <h3>Request Card</h3>
            <label>Context Name</label>
            <input 
                type="text" 
                value={contextName} 
                onChange={handleInputChange} 
                placeholder="Enter here" 
            />
        </div>
    );
};

export default RequestCard;
