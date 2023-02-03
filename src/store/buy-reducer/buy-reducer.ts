import { ICart } from '../../ui/cart/cart.interface';
import { IAction, Ibasket } from './buy-reducer.interface';

const ADD_PRODUCT = 'ADD_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const defaultState: Ibasket = {
  basket: [],
};

export const reducer = (state = defaultState, action: IAction) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return { ...state, basket: [...state.basket, action.payload] };

    case DELETE_PRODUCT:
      return {
        ...state,
        basket: state.basket.filter((product: ICart) => product.id !== action.payload),
      };

    default:
      return state;
  }
};
