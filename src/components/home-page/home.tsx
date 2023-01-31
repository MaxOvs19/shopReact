import React, { useState } from 'react';
import './home.scss';
import jacket from '../../assets/img/jacket.png';
import tshirt from '../../assets/img/TShirt.png';
import tshirt2 from '../../assets/img/TShirt2.png';
import tshirt3 from '../../assets/img/TShirt3.png';
import products from './products.json';
import brends from './brands.json';
import Cart from '../../ui/cart/cart';
import Brend from '../../ui/brend/brend';

interface IProps {}

export const Home = () => {
  // const [product, setProduct] = useState([]);

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
