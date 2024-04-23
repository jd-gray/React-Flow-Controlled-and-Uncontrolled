import { Background, Controls, MiniMap, Panel, ReactFlow, Node, Edge } from "reactflow";
import { useState } from "react";
import { initialEdges, initialNodes } from "./App.tsx";

const ControlledFlow = () => {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, _] = useState<Edge[]>(initialEdges);

  // Function to add a new node
  const onAddNode = () => {
    const newNode = {
      id: (nodes.length + 1).toString(), // Simple ID generation
      data: { label: `Node ${nodes.length + 1}` },
      position: {
        x: Math.random() * 500,
        y: Math.random() * 500,
      },
    };

    setNodes((nds) => nds.concat(newNode));
  };

  return (
    <div style={{ height: 800 }}>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <MiniMap />
        <Controls />
        <Background />
        <Panel position='top-left'>
          <button onClick={onAddNode}>
            Add Node
          </button>
        </Panel>
      </ReactFlow>
    </div>
  );
}

export default ControlledFlow;
