import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3"
const TMDB_TOKEN = process.env.REACT_APP_TMDB_TOKEN;


const headers = {
    Authorization: "bearer" + TMDB_TOKEN
}


export const fetchApiData = async (url, params) => {
    try {
        const {data} = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (error) {
        console.log(error)
        return error;
    }

}

console.log("example:", BASE_URL + "/movie/popular" + "?" + "api_key=25e4804b33df74734a074c6583692bf2")