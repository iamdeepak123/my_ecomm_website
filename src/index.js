import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AppProvider } from "./Context/ContextFile.jsx";
import { CartProvider } from './Context/CartContext.jsx';
import { LoginProvider } from './Context/LogInOutContext.jsx';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

    <AppProvider>
        <CartProvider>
            <LoginProvider>
                <App />
            </LoginProvider>
        </CartProvider>
    </AppProvider>
);

reportWebVitals();
