import React from 'react';
import './header.scss';
import logo from '../../assets/img/logo.png';
import basket from '../../assets/img/basket.png';
import { Link } from 'react-router-dom';

interface IProps {}

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Link to="/">
          <img src={logo} alt="#" />
        </Link>
      </div>
      <div className="header__basket">
        <Link to="/basket">
          <img src={basket} alt="#" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
