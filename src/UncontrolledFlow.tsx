import { Background, Controls, MiniMap, Panel, ReactFlow, ReactFlowProvider, useReactFlow } from "reactflow";
import { initialEdges, initialNodes } from "./App.tsx";

const Flow = () => {
  const reactFlowInstance = useReactFlow();

  const onAddNode = () => {
    // Getting nodes from the instance each time ensures we're always up-to-date
    const nodes = reactFlowInstance.getNodes();
    const newNodeId = `node-${nodes.length + 1}`; // Generate the ID based on the current number of nodes

    const newNode = {
      id: newNodeId,
      data: { label: `Node ${nodes.length + 1}` },
      position: {
        x: Math.random() * 500,
        y: Math.random() * 500,
      },
    };

    // Directly add the new node using React Flow's instance method
    reactFlowInstance.addNodes(newNode);
  };

  return (
    <div style={{height: 800}}>
      <ReactFlow defaultNodes={initialNodes} defaultEdges={initialEdges} fitView>
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
};

const UncontrolledFlow = () => {
  return (
    <ReactFlowProvider>
      <Flow />
    </ReactFlowProvider>
  )
};

export default UncontrolledFlow;
