import axios from 'axios'

export const searchApi = axios.create({
  baseURL: "https://api.mapbox.com/geocoding/v5/mapbox.places",
  params: {
    limit: 5,
    language: 'es',
    access_token: "pk.eyJ1IjoiYWxldGFydGFnbGlhIiwiYSI6ImNsOXBxYXlrODBsZmg0MW8wbjRpc2xpcTgifQ.xK4XjySVSxY4kk1mC1Tfcw"

  }
})