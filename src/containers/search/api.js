import axios from "axios/index";

export function getSearchResults (q="") {
    return axios.get('/api/items?search=' + q + '&limit=5').then(res => res.data);
}

