import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken = "pk.eyJ1IjoiYWxldGFydGFnbGlhIiwiYSI6ImNsOXBxYXlrODBsZmg0MW8wbjRpc2xpcTgifQ.xK4XjySVSxY4kk1mC1Tfcw";


if (!navigator.geolocation) {
  alert('Tu navegador no tiene opción de Geolocation');
  throw new Error('Tu navegador no tiene opción de Geolocation')
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);

