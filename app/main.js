/* entry point */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store.js';


document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(
    <Provider store={ store }>
      <h1>*boom* goes the boilerplate</h1>
    </Provider>,
    document.getElementById('app')
  );
});
