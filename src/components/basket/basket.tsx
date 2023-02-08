import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Ibasket } from '../../store/buy-reducer/buy-reducer.interface';
import { ICart } from '../../ui/cart/cart.interface';
import './basket.scss';

export const Basket = ({}) => {
  const dispath = useDispatch();
  const [qty, setQty] = useState('');

  const selectedProducts = useSelector((defaultState: Ibasket) => defaultState.basket);
  let col = 0;

  const deleteItem = (item: ICart) => {
    dispath({ type: 'DELETE_PRODUCT', payload: item.id });
  };

  let a = 0;

  // selectedProducts.filter((item: ICart) => {
  //   return console.log(item.id);
  // });

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
            sum += tovar.regular_price.value;
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
                    {/* <input
                      type="number"
                      name="input"
                      id="inputTest"
                      className="selectedProduct__input"
                      min={1}
                      // value={qty}
                      onChange={(event) => setQty(event.target.value)}
                    /> */}
                    <div>
                      <span>${tovar.regular_price.value}</span>
                      <button className="delite" onClick={() => deleteItem(tovar)}>
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
        <p className="amountPayable">SubTotal: {sum} </p>
        <button>Checkout</button>
      </div>
    </div>
  );
};

export default Basket;
