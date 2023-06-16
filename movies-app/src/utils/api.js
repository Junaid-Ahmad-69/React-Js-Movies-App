import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"
const TMDB_TOKEN = process.env.REACT_APP_TMDB_TOKEN;

const headers = {
    'Authorization': TMDB_TOKEN
}

export const fetchApiData = async (url, params) => {
    const response = await fetch(BASE_URL + url + '/?api_key=b33a39830710712a40d10374351f5dde', {
        headers,
        params,
    });

    if (!response.ok) {
        throw new Error('Failed to fetch data');
    }

    return await response.json();
};











