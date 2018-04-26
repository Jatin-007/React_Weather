import axios from 'axios';

const API_KEY = 'b265236f90d5a85243173d8fca43bc17'; // openweathermap.org API key
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?q=London,us&appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}