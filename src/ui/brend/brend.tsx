import React from 'react';
import './brend';

interface IProps {
  id: number;
  title: string;
  sort: string;
  code: string;
}

export const Brend = ({ id, code, sort, title }: IProps) => {
  return <li id={id.toString()}>{title}</li>;
};

export default Brend;
