import React, { useState } from 'react';
import { State } from '../../store/buy-reducer';
import { useDispatch, useSelector } from 'react-redux';
import { IBasket } from '../../store/buy-reducer/buy-reducer.interface';
import { ICart } from './cart.interface';
import './cart.scss';

export const Cart = ({ title, brand, regular_price, image, id, type, sku, count }: ICart) => {
  const basket = useSelector((defaultState: State) => defaultState.buy.basket);
  const dispath = useDispatch();

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
    <div className="cart" id={id.toString()} key={id}>
      <img src={require(`../../assets/img/${image}`)} alt="#" />
      <h4>{title}</h4>
      <h6>Brend: {brand}</h6>
      <p>
        <span>{regular_price.currency} </span>
        {regular_price.value}
      </p>
      <button className="btn btn-danger " onClick={() => Add(id)}>
        Buy
      </button>
    </div>
  );
};

export default Cart;
