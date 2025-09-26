import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Phone from './phone';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const isSmallScreen = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(max-width: 520px)').matches;

root.render(
  <React.StrictMode>
    {isSmallScreen ? <Phone /> : <App />}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();