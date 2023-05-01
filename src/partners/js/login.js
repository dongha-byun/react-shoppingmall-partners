import { api } from "./axios";
import { setStorageItem } from "./headers";

export function partnersLoginApi(loginValue){
    api.post("/partners/login", loginValue)
    .then((response) => {
        if(response.data.accessToken){
            setStorageItem("partner-token", response.data.accessToken);
            setStorageItem("partner-name", response.data.name);
        }
        window.location.href = "/partners/products";
    })
    .catch((error) => {
        alert("오류가 발생했습니다.");
        console.log(error);
    });
}