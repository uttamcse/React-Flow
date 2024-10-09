
import React, { useState } from 'react';
import AddButton from './components/AddButton';
import RequestCard from './components/RequestCard';
import ResponseCard from './components/ResponseCard';
import AddCardForm from './components/AddCardForm';
import RuleFlow from './flows/RuleFlow';

const App = () => {
    const [cards, setCards] = useState([]);
    const [nodes, setNodes] = useState([]); 
    const [edges, setEdges] = useState([]); 
    const addCard = (type) => {
        if (type === 'request') {
           
            setCards((prevCards) => [
                ...prevCards,
                { type: 'request', contextName: '' },
            ]);
        } else {
            
            setCards((prevCards) => [
                ...prevCards,
                { type: 'response', status: '', data: '' },
            ]);
        }
    };

    const updateRequestCard = (index, contextName) => {
        setCards((prevCards) => {
            const updatedCards = [...prevCards];
            updatedCards[index] = { ...updatedCards[index], contextName };
            return updatedCards;
        });
    };

    const updateResponseCard = (index, status, data) => {
        setCards((prevCards) => {
            const updatedCards = [...prevCards];
            updatedCards[index] = { ...updatedCards[index], status, data };
            return updatedCards;
        });
    };

    return (
        <div className="container">
            <AddButton addCard={addCard} /> {/* Ensure addCard is passed correctly */}
            {cards.map((card, index) => (
                <div key={index} className="card">
                    {card.type === 'request' ? (
                        <RequestCard 
                            index={index}
                            contextName={card.contextName}
                            updateRequestCard={updateRequestCard}
                        />
                    ) : (
                        <ResponseCard 
                            index={index}
                            status={card.status}
                            data={card.data}
                            updateResponseCard={updateResponseCard}
                        />
                    )}
                </div>
            ))}
            <RuleFlow nodes={nodes} edges={edges} />
        </div>
    );
};

export default App;
