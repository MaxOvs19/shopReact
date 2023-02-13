import React from 'react';
import './brend';
import products from './products.json';
import brends from './brands.json';
import { State } from '../../store/buy-reducer';
import { useDispatch, useSelector } from 'react-redux';

interface IProps {
  id: number;
  title: string;
  sort: string;
  code: string;
}

export const Brend = ({ id, code, sort, title }: IProps) => {
  const dispath = useDispatch();
  const sortProduct = (code: number) => {
    dispath({ type: 'SORT_PRODUCT', payload: code });
  };

  return (
    <li id={id.toString()} onClick={() => sortProduct(id)}>
      {title}
    </li>
  );
};

export default Brend;
