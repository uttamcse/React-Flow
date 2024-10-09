// src/flows/RuleFlow.jsx
import React from 'react';
import ReactFlow, { Controls } from 'reactflow';
import 'reactflow/dist/style.css';

const RuleFlow = ({ nodes, edges }) => (
    <div style={{ height: 400 }}>
        <ReactFlow nodes={nodes} edges={edges}>
            <Controls />
        </ReactFlow>
    </div>
);

export default RuleFlow;
