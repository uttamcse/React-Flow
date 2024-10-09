import React, { useState, useEffect } from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
//import 'reactflow/dist/style.css';  Import the basic styling for React Flow
import axios from 'axios';

const CardFlow = () => {
    const [nodes, setNodes] = useState([]);
    const [edges, setEdges] = useState([]);

    // Fetch data from the API
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/cards');
                const data = response.data;

                // Convert the data into nodes and edges for React Flow
                const generatedNodes = data.map((card, index) => ({
                    id: card.id.toString(),
                    position: { x: Math.random() * 400, y: Math.random() * 400 }, // Random positions
                    data: { label: `${card.contextName} (${card.status})` }
                }));

                // Optionally, generate edges between nodes if needed (example connects each node to the next)
                const generatedEdges = data.map((card, index) => {
                    if (index < data.length - 1) {
                        return {
                            id: `e${card.id}-${data[index + 1].id}`,
                            source: card.id.toString(),
                            target: data[index + 1].id.toString(),
                            animated: true,
                        };
                    }
                    return null;
                }).filter(edge => edge !== null); // Remove any null values

                setNodes(generatedNodes);
                setEdges(generatedEdges);
            } catch (error) {
                console.error('Error fetching cards:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div style={{ height: 600, width: '100%' }}>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                fitView
            >
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    );
};

export default CardFlow;
