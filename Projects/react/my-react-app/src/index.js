/* import React from 'react';
import ReactDOM from 'react-dom';
// import Todo from './Todo.jsx';
import changeNum from './changeNum.jsx';
// import { createRoot } from 'react-dom/client';
import './style.css'

ReactDOM.render(
    <>
  <changeNum />
    </>,
    document.getElementById('root')
);
 */



import React from 'react';
import ReactDOM from 'react-dom';
// import ChangeNum from './ChangeNum';
// import App1 from './UseEffect';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './style.css';

ReactDOM.render(

  <BrowserRouter><App /></BrowserRouter>,
  document.getElementById('root')
);

