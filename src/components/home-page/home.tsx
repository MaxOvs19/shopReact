import React, { useState } from 'react';
import './home.scss';
import jacket from '../../assets/img/jacket.png';
import tshirt from '../../assets/img/TShirt.png';
import tshirt2 from '../../assets/img/TShirt2.png';
import tshirt3 from '../../assets/img/TShirt3.png';
 
interface IProps {}

export const Home = () => {
  const [product, setProduct] = useState([]);

  const JsonGoods = () => {
    fetch('./products.json').then((response) => response.json());
  };

  JsonGoods();

  return (
    <div className="home">
      <div className="brends">
        <h3>Brends</h3>
        <ul>
          <li>Brend1</li>
          <li>Brend2</li>
          <li>Brend3</li>
          <li>Brend4</li>
          <li>Brend5</li>
          <li>Brend6</li>
          <li>Brend7</li>
        </ul>
      </div>
      <div className="goods">
        <div className="goods__cart">
          <img src={jacket} alt="#" />
          <h4>Name product</h4>
          <h6>Brend</h6>
          <p>cost</p>
        </div>
        <div className="goods__cart">
          <img src={tshirt} alt="#" />
          <h4>Name product</h4>
          <h6>Brend</h6>
          <p>cost</p>
        </div>
        <div className="goods__cart">
          <img src={tshirt2} alt="#" />
          <h4>Name product</h4>
          <h6>Brend</h6>
          <p>cost</p>
        </div>
        <div className="goods__cart">
          <img src={tshirt3} alt="#" />
          <h4>Name product</h4>
          <h6>Brend</h6>
          <p>cost</p>
        </div>
        <div className="goods__cart">
          <img src={jacket} alt="#" />
          <h4>Name product</h4>
          <h6>Brend</h6>
          <p>cost</p>
        </div>
        <div className="goods__cart">
          <img src={tshirt} alt="#" />
          <h4>Name product</h4>
          <h6>Brend</h6>
          <p>cost</p>
        </div>
        <div className="goods__cart">
          <img src={tshirt2} alt="#" />
          <h4>Name product</h4>
          <h6>Brend</h6>
          <p>cost</p>
        </div>
        <div className="goods__cart">
          <img src={tshirt3} alt="#" />
          <h4>Name product</h4>
          <h6>Brend</h6>
          <p>cost</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
