import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from "./Context/ContextFile.jsx";
import { CartProvider } from './Context/CartContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <AppProvider>
        <CartProvider>
            <App />
        </CartProvider>
    </AppProvider>
);

reportWebVitals();
