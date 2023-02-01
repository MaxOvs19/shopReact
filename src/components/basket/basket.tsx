import React from 'react';
import './basket.scss';

interface IProps {}

export const Basket = ({}) => {
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
        <div className="table__body"></div>
      </div>

      <div className="total">
        <p className="amountPayable">SubTotal: 0</p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Basket;
