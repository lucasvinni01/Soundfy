import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoutes from 'routes';
import './index.css';
import FavoritosProvider from 'Context/Favoritos';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FavoritosProvider>
      <AppRoutes/>
    </FavoritosProvider>
  </React.StrictMode>
);
