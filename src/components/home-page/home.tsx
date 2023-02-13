import React, { useState } from 'react';
import brends from './brands.json';
import Cart from '../../ui/cart/cart';
import Brend from '../../ui/brend/brend';
import { useDispatch, useSelector } from 'react-redux';
import { State } from '../../store/buy-reducer';
import './home.scss';

export const Home = () => {
  const dispath = useDispatch();

  const allProducts = useSelector((state: State) => state.product.allProduct);

  const removeSort = () => {
    dispath({
      type: 'LOAD_PRODUCT',
    });
  };

  return (
    <div className="home">
      <div className="brends">
        <h3 onClick={removeSort} className="brends__title">
          All Brends
        </h3>
        <ul>
          {brends.map((brend) => {
            return <Brend id={brend.id} title={brend.title} sort={brend.sort} code={brend.code} />;
          })}
        </ul>
      </div>
      <div className="goods">
        {allProducts.map((product) => {
          return (
            <Cart
              type={product.type}
              id={product.id}
              sku={product.sku}
              title={product.title}
              regular_price={{
                currency: product.regular_price.currency,
                value: product.regular_price.value,
              }}
              image={product.image}
              brand={product.brand}
              count={product.count}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
