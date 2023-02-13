import { composeWithDevTools } from '@redux-devtools/extension';
import { combineReducers, legacy_createStore as createStore } from 'redux';
import { buyReducer } from './buy-reducer';
import { productReducer } from './home-reducer';

const rootReducer = combineReducers({
  product: productReducer,
  buy: buyReducer,
});

export const store = createStore(rootReducer, composeWithDevTools());

export type State = ReturnType<typeof rootReducer>;
