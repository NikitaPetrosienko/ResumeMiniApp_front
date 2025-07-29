import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

const tg = window.Telegram.WebApp;
tg.ready();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
