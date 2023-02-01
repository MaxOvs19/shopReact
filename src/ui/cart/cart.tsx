import React, { useState } from 'react';
import './cart.scss';

interface IProps {
  type: string;
  id: number;
  sku: string;
  title: string;
  regular_price: {
    currency: string;
    value: number;
  };
  image: string;
  brand: number;
  BuyProduct?: (item: object) => void;
}

export const Cart = ({ title, brand, regular_price, image, id }: IProps) => {
  return (
    <div className="cart" id={id.toString()}>
      <img src={require(`../../assets/img/${image}`)} alt="#" />
      <h4>{title}</h4>
      <h6>Brend: {brand}</h6>
      <p>
        <span>{regular_price.currency}</span>
        {regular_price.value}
        <button className="buttonBuy">Buy</button>
      </p>
    </div>
  );
};

export default Cart;
