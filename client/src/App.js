import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import AiBot from './components/AiBot';

function App() {
  const [showAiBot, setShowAiBot] = useState(false);

  // Function to toggle the visibility of AiBot
  const toggleAiBot = () => {
    setShowAiBot(!showAiBot);
  };

  return (
    <div className="App">
      <Nav />
      <button
        onClick={toggleAiBot}
        className="fixed bottom-4 right-4 bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">
        Toggle AiBot
      </button>
      {showAiBot && <AiBot />}
    </div>
  );
}

export default App;
