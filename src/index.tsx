import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import store from './store/app/store';
import { Provider } from 'react-redux/es/exports';
import { setStyle } from './store/features/categorySlice';

store.dispatch(setStyle("men's%20clothing"))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>
);