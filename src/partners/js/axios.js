import axios from "axios";

export const webUrl = "http://localhost:8000";
export const frontUrl = "http://localhost:3001";
export const imgUrl = webUrl + "/thumbnail/";

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
    },
    put : async(url, body, header) => {
        let response = await api.put(url, body, header);
        return response.data;
    }
};

export default ApiService;