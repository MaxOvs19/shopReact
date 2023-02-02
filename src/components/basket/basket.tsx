import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { defaultState, Ibasket } from '../..';
import { ICart } from '../../ui/cart/cart.interface';
import './basket.scss';

interface IProps {}

export const Basket = ({}) => {
  const dispath = useDispatch();
  let a = defaultState.basket;
  const cash = useSelector((defaultState: Ibasket) => defaultState.basket);

  return (
    <div className="basket">
      <h3>Shopping Cart</h3>
      <div className="table">
        <div className="table__header">
          <p>Item</p>

          <div className="text">
            <p>Price</p>
            <p>Qty</p>
            <p>Total</p>
          </div>
        </div>
        <div className="table__body">
          {cash.map((tovar: ICart) => {
            return (
              <>
                <div>{tovar.title}</div>
                <div>{tovar.brand}</div>
                <div>{tovar.id}</div>
                <div>{tovar.image}</div>
                <div>{tovar.type}</div>
                <div>{tovar.regular_price.value}</div>
              </>
            );
          })}
        </div>
      </div>

      <div className="total">
        <p className="amountPayable">SubTotal: 0</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Basket;
