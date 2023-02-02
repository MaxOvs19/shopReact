import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Iaction, defaultState, Ibasket } from '../..';
import { ICart } from './cart.interface';
import './cart.scss';

export const Cart = ({ title, brand, regular_price, image, id, BuyProduct }: ICart) => {
  const dispath = useDispatch();
  let a = defaultState.basket;
  const cash = useSelector((defaultState: Ibasket) => defaultState.basket);

  const Add = () => {
    let AddedProduct = {
      title,
      brand,
      regular_price,
      image,
      id,
    };

    dispath({ type: 'ADD_CASH', payload: AddedProduct });
  };

  return (
    <div className="cart" id={id.toString()}>
      <img src={require(`../../assets/img/${image}`)} alt="#" />
      <h4>{title}</h4>
      <h6>Brend: {brand}</h6>
      <p>
        <span>{regular_price.currency}</span>
        {regular_price.value}
      </p>
      <button className="buttonBuy" onClick={Add}>
        Buy
      </button>
    </div>
  );
};

export default Cart;
