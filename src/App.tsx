import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import 'reactflow/dist/style.css';

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/controlled-flow">Controlled Flow</Link> |
        <Link to="/uncontrolled-flow">Uncontrolled Flow</Link>
      </nav>
      <Routes>
        <Route path="/controlled-flow" element={<div>Controlled flow</div>} />
        <Route path="/uncontrolled-flow" element={<div> Uncontrolled flow</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
