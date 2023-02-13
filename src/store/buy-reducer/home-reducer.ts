import { IAction } from './buy-reducer.interface';
import { ICart } from '../../ui/cart/cart.interface';
import products from '../../components/home-page/products.json';

const SORT_PRODUCT = 'SORT_PRODUCT';
const LOAD_PRODUCT = 'LOAD_PRODUCT';

interface IProduct {
  allProduct: ICart[];
}

export const defaultState: IProduct = {
  allProduct: [],
};

products.forEach((item) => {
  defaultState.allProduct.push(item);
});

export const productReducer = (state = defaultState, action: IAction) => {
  switch (action.type) {
    case SORT_PRODUCT:
      return {
        ...state,
        allProduct: defaultState.allProduct.filter((item) => item.brand === action.payload),
      };
    case LOAD_PRODUCT:
      return {
        ...state,
        allProduct: defaultState.allProduct,
      };
    default:
      return state;
  }
};
