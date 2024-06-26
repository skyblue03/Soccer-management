import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Pitch from './components/Pitch';
import './App.css';

function App() {
  const [formation, setFormation] = useState('4-4-2');
  return (
    <div className="app">
      <Sidebar setFormation={setFormation} />
      <div className="main-content">
        <Pitch formation={formation} />
      </div>
    </div>
  );
}

export default App;
