import axios from "axios";

axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withXSRFToken = true;
axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.withCredentials = true;

const APIURL = "https://api.royal.uz/";

export const client = axios.create({
    baseURL: APIURL,
    headers: {
        "Content-Type": 'application/json',
    }
});

export default client;
