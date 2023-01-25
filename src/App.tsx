import React from 'react';
import './App.css';
import Home from './components/home-page/home';
import Header from './ui/header/header';

function App() {
  return (
    <div className="App container">
      <Header />
      <Home />
    </div>
  );
}

export default App;
