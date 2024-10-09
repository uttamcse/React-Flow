// src/components/AddButton.jsx
import React, { useState } from 'react';
import CardOptions from './CardOptions';

const AddButton = ({ addCard }) => { // Accept addCard as a prop
    const [showCardOptions, setShowCardOptions] = useState(false);

    const handleAddClick = () => {
        setShowCardOptions(!showCardOptions);
    };

    return (
        <div>
            <button onClick={handleAddClick}>Add/Plus</button>
            {showCardOptions && <CardOptions addCard={addCard} />} {/* Pass addCard here */}
        </div>
    );
};

export default AddButton;
