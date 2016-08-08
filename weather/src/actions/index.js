import axios from 'axios';
import secretKeys from '../../secrets.js';

const API_KEY = secretKeys.openweather_api;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}

export function changeSearchTerm(term) {
    return {
        type: 'CHANGE_SEARCH_TERM',
        payload: { term }
    };
}
