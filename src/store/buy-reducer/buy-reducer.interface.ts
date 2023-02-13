import { ICart } from '../../ui/cart/cart.interface';

export interface IBasket {
  basket: ICart[];
}

export interface IAction {
  type: string;
  payload: any;
}
