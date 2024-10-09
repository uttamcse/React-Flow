import React, { useState } from 'react';
import axios from 'axios';

const AddCardForm = () => {
    const [contextName, setContextName] = useState('');
    const [status, setStatus] = useState('');
    const [data, setData] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newCard = {
            contextName,
            status,
            data
        };

        try {
            // Send a POST request to the backend API
            const response = await axios.post('http://localhost:5000/api/cards', newCard);
            console.log('Card saved:', response.data);
            // Optionally reset the form fields
            setContextName('');
            setStatus('');
            setData('');
        } catch (error) {
            console.error('There was an error saving the card:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Context Name:</label>
                <input type="text" value={contextName} onChange={(e) => setContextName(e.target.value)} />
            </div>
            <div>
                <label>Status:</label>
                <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />
            </div>
            <div>
                <label>Data:</label>
                <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
            </div>
            <button type="submit">Add Card</button>
        </form>
    );
};

export default AddCardForm;
