import axios from "axios/index";

export function getProduct (id) {
    return axios.get(`/api/items/${id}`).then(res => res.data);
}