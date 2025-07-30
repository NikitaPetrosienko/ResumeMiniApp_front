import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';

// Инициализируем Telegram WebApp SDK
window.Telegram.WebApp.ready();

createRoot(document.getElementById('root')).render(<App />);
