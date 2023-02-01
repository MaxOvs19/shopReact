import React from 'react';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Basket from './components/basket/basket';
import Home from './components/home-page/home';
import Header from './ui/header/header';

function App() {
  return (
    <div className="App container">
      <Header />
      <BrowserRouter>
        {/* <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/basket" element={<Basket />}></Route>
          </Routes>
        </Router> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
