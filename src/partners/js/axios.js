import axios from "axios";

export const webUrl = "http://localhost:10000";
export const frontUrl = "http://localhost:3001";

export const api = axios.create({
    baseURL: webUrl
});

const ApiService = {
    get : async(url, header) => {
        let response = await api.get(url, header);
        return response.data;
    },
    post : async(url, body, header) => {
        let response = await api.post(url, body, header);
        return response.data;
    } 
};

export default ApiService;