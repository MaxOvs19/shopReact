import React, { useState } from 'react';
import { ICart } from './cart.interface';
import './cart.scss';

export const Cart = ({ title, brand, regular_price, image, id, BuyProduct }: ICart) => {
  const Add = () => {
    let AddedProduct = {
      title,
      brand,
      regular_price,
      image,
      id,
    };

    BuyProduct(AddedProduct);
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
