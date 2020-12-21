import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App"; 
import App2 from "./App2"; 


ReactDOM.render(
  <>
    <App />
    <App2 login="michelleandersson" />
  </>  
  ,
  document.getElementById('root')
);

