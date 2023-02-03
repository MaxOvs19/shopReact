import React, { useState } from 'react';
import './home.scss';
import products from './products.json';
import brends from './brands.json';
import Cart from '../../ui/cart/cart';
import Brend from '../../ui/brend/brend';
import { ICart } from '../../ui/cart/cart.interface';

interface IProps {}

export const Home = () => {
  return (
    <div className="home">
      <div className="brends">
        <h3>Brends</h3>
        <ul>
          {brends.map((brend) => {
            return <Brend id={brend.id} title={brend.title} sort={brend.sort} code={brend.code} />;
          })}
        </ul>
      </div>
      <div className="goods">
        {products.map((product) => {
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
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
