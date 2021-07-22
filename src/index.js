import React from 'react';
import { HashRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  // What is this doing here?
  <React.StrictMode>
    <HashRouter><App /></HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);