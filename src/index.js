import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './App';
import 'antd/dist/reset.css';
import store from '../src/redux/store';

const rootElement = document.getElementById('root');

// Use createRoot to render your app
ReactDOM.createRoot(rootElement).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
);