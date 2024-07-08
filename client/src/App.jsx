import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from './Users';
import CreateUsers from './CreateUsers';
import UpdateUsers from './UpdateUsers'; // Fixed the typo in the import

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Users/>} />
          <Route path="/create" element={<CreateUsers/>} />
          <Route path="/update" element={<UpdateUsers/>} /> {/* Fixed the typo in the component name */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
