import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Component from './Component/Component';
import Slide2 from './Slide2/Slide2';
import Router from './Router';
import CardDetails from './CardDetails/CardDetails';
import Slide5 from './Slide5/Slide5'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Router/>
    {/* <Component/> */}
    {/* <Slide2/> */}
    {/* <Details/> */}
    {/* <CardDetails/> */}
    {/* <Slide5/> */}
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
