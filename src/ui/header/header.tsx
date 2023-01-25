import React from 'react';
import './header.scss';
import logo from '../../assets/img/logo.png';
import basket from '../../assets/img/basket.png';

interface IProps {}

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="#" />
      </div>
      <div className="header__basket">
        <img src={basket} alt="#" />
      </div>
    </header>
  );
};

export default Header;
