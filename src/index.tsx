import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// ant design import
import 'antd/dist/antd.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

