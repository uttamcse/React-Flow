// src/components/CardOptions.jsx
import React from 'react';

const CardOptions = ({ addCard }) => ( // Accept addCard as a prop
    <div className="card-options">
        <button onClick={() => addCard('request')}>Add Request Card</button>
        <button onClick={() => addCard('response')}>Add Response Card</button>
    </div>
);

export default CardOptions;
