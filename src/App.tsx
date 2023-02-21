import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.scss';
import Basket from './components/basket/basket';
import Home from './components/home-page/home';
import logo from './assets/img/logo.png';
import basket from './assets/img/basket.png';
import { useDispatch, useSelector } from 'react-redux';
import { State } from './store/buy-reducer';

function App() {
  const basketAll = useSelector((defaultState: State) => defaultState.buy.basket);

  return (
    <div className="App container">
      <BrowserRouter>
        <div className="header">
          <div className="header__logo">
            <Link to="/">
              <img src={logo} alt="#" />
            </Link>
          </div>
          <div className="header__basket">
            <Link to="/basket">
              <img src={basket} alt="#" />
            </Link>
            <div className="amount">{basketAll.length}</div>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
