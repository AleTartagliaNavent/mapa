import axios from 'axios'

export const directionsApi = axios.create({
  baseURL: "https://api.mapbox.com/directions/v5/mapbox/driving",
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    steps: false,
    access_token: "pk.eyJ1IjoiYWxldGFydGFnbGlhIiwiYSI6ImNsOXBxYXlrODBsZmg0MW8wbjRpc2xpcTgifQ.xK4XjySVSxY4kk1mC1Tfcw"

  }
})