import { ICart } from '../../ui/cart/cart.interface';
import { IAction, Ibasket } from './buy-reducer.interface';

const ADD_PRODUCT = 'ADD_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const ADD_COL_PRODUCT = 'ADD_COL_PRODUCT';
const REMOVE_COL_PRODUCT = 'REMOVE_COL_PRODUCT';

export const defaultState: Ibasket = {
  basket: [],
};

export const reducer = (state = defaultState, action: IAction) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case ADD_COL_PRODUCT:
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id == action.payload
            ? {
                ...item,
                count: item.count + 1,
              }
            : item,
        ),
      };
    case REMOVE_COL_PRODUCT:
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id == action.payload
            ? {
                ...item,
                count: item.count - 1,
              }
            : item,
        ),
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        basket: state.basket.filter((product: ICart) => product.id !== action.payload),
      };

    default:
      return state;
  }
};
