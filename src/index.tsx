import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Router } from 'react-router-dom';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';

export interface Iaction {
  type: string;
  payload: any;
}

export interface Ibasket {
  basket: [];
}

export const defaultState: Ibasket = {
  basket: [],
};

const reducer = (state = defaultState, action: Iaction) => {
  switch (action.type) {
    case 'ADD_CASH':
      return { ...state, basket: [...state.basket, action.payload] };

    case 'GET_CASH':
      return { ...state, basket: action.payload };

    default:
      return state;
  }
};

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);
