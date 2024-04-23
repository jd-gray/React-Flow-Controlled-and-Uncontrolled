import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import 'reactflow/dist/style.css';
import ControlledFlow from "./ControlledFlow.tsx";

export const initialNodes = [
  {
    id: '1',
    type: 'input',
    data: { label: 'Input Node' },
    position: { x: 250, y: 25 },
  },

  {
    id: '2',
    data: { label: <div>Default Node</div> },
    position: { x: 100, y: 125 },
  },
  {
    id: '3',
    type: 'output',
    data: { label: 'Output Node' },
    position: { x: 250, y: 250 },
  },
];

export const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3', animated: true },
];

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/controlled-flow">Controlled Flow</Link> |
        <Link to="/uncontrolled-flow">Uncontrolled Flow</Link>
      </nav>
      <Routes>
        <Route path="/controlled-flow" element={<ControlledFlow />} />
        <Route path="/uncontrolled-flow" element={<div> Uncontrolled flow</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
