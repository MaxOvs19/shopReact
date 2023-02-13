import React from 'react';
import './brend';
import products from './products.json';
import brends from './brands.json';
import { State } from '../../store/buy-reducer';
import { useSelector } from 'react-redux';

interface IProps {
  id: number;
  title: string;
  sort: string;
  code: string;
}

export const Brend = ({ id, code, sort, title }: IProps) => {
  const products = useSelector((state: State) => state.product.allProduct);

  const sortProduct = () => {};

  return (
    <li id={id.toString()} onClick={() => sortProduct()}>
      {title}
    </li>
  );
};

export default Brend;
