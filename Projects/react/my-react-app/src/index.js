import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo.jsx';
import { StrictMode } from 'react';
// import { createRoot } from 'react-dom/client';
import './style.css'


ReactDOM.render(
    <>
        <StrictMode>
  <Todo />
</StrictMode>
    </>,
    document.getElementById('root')
);


