import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Ibasket } from '../../store/buy-reducer/buy-reducer.interface';
import { ICart } from './cart.interface';
import './cart.scss';

export const Cart = ({ title, brand, regular_price, image, id, type, sku, count }: ICart) => {
  const dispath = useDispatch();
  const basket = useSelector((defaultState: Ibasket) => defaultState.basket);

  const Add = (id: number) => {
    let flag = false;
    basket.forEach((item) => {
      if (item.id === id) {
        flag = true;
      }
    });

    let addedProduct = {
      type,
      sku,
      title,
      brand,
      regular_price,
      image,
      id,
      count: 1,
    };

    if (flag === false) {
      dispath({ type: 'ADD_PRODUCT', payload: addedProduct });
    } else {
      return;
    }
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
      <button className="buttonBuy" onClick={() => Add(id)}>
        Buy
      </button>
    </div>
  );
};

export default Cart;
