import { IAction } from './buy-reducer.interface';
import { ICart } from '../../ui/cart/cart.interface';

const SORT_PRODUCT = 'SORT_PRODUCT';
const LOADING_PRODUCT = 'LOADING_PRODUCT';

interface IProduct {
  allProduct: ICart[];
}

export const defaultState: IProduct = {
  allProduct: [],
};

export const productReducer = (state = defaultState, action: IAction) => {
  switch (action.type) {
    // case SORT_PRODUCT:
    //   return {
    //     ...state,
    //     allProduct: state.allProduct.sort((a, b) => {

    //     }),
    //   };

    case LOADING_PRODUCT:
      return {
        ...state,
        allProduct: [...state.allProduct, action.payload],
      };
    default:
      return state;
  }
};
