import React from 'react';
import ReactDOM from 'react-dom';
import { StrictMode } from 'react'; // Import StrictMode
import App from './App';
// import { BrowserRouter, Route, Switch } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);