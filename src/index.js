import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'primereact/resources/themes/lara-light-indigo/theme.css';   // tema
import 'primereact/resources/primereact.min.css';                   // core css
import 'primeicons/primeicons.css';                                 // iconos
import 'primeflex/primeflex.css'                                    // flex
import "slick-carousel/slick/slick.css";                           // carousel
import "slick-carousel/slick/slick-theme.css";                     // carousel

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);