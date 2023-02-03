import { ICart } from '../../ui/cart/cart.interface';

export interface Ibasket {
  basket: ICart[];
}

export interface IAction {
  type: string;
  payload: any;
}
