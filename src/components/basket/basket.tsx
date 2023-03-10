import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/buy-reducer';
import { IBasket } from '../../store/buy-reducer/buy-reducer.interface';
import { ICart } from '../../ui/cart/cart.interface';
import './basket.scss';

export const Basket = ({}) => {
  const dispath = useDispatch();

  const selectedProducts = useSelector((state: State) => state.buy.basket);

  const addTovar = (item: ICart) => {
    dispath({ type: 'ADD_COL_PRODUCT', payload: item.id });
  };

  const removeTovar = (item: ICart) => {
    dispath({ type: 'REMOVE_COL_PRODUCT', payload: item.id });
  };

  const deleteItem = (item: ICart) => {
    dispath({ type: 'DELETE_PRODUCT', payload: item.id });
  };

  let sum = 0;

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
          {selectedProducts.map((tovar: ICart) => {
            if (tovar.count <= 0) {
              dispath({ type: 'DELETE_PRODUCT', payload: tovar.id });
            }
            sum += tovar.regular_price.value * tovar.count;
            return (
              <>
                <div className="selectedProduct">
                  <div className="selectedProduct__name">
                    <img
                      src={require(`../../assets/img/${tovar.image}`)}
                      alt="#"
                      className="selectedProduct__img"
                    />
                    <div>
                      <span>Brend: {tovar.brand}</span> / <span>Item: {tovar.title} </span>
                    </div>
                  </div>

                  <div className="selectedProduct__price">
                    <div>${tovar.regular_price.value}</div>
                    <div>
                      <button onClick={() => addTovar(tovar)} className="btn btn-primary plus">
                        +
                      </button>
                      <span className="count">{tovar.count}</span>
                      <button onClick={() => removeTovar(tovar)} className="btn btn-primary plus">
                        -
                      </button>
                    </div>
                    <div>
                      <span>${(tovar.regular_price.value * tovar.count).toFixed(2)}</span>
                      <button className="delite btn btn-danger" onClick={() => deleteItem(tovar)}>
                        X
                      </button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="total">
        <p className="amountPayable">SubTotal: {sum.toFixed(2)} </p>
        <button className="btn btn-success">Checkout</button>
      </div>
    </div>
  );
};

export default Basket;
