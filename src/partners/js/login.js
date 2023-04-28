import { api } from "./axios";

export function partnersLoginApi(loginValue){
    api.post("/partners/login", loginValue)
    .then((response) => {
        if(response.data.accessToken){
            localStorage.setItem("partner-token", response.data.accessToken);
        }
        window.location.href = "/partners/products";
    })
    .catch((error) => {
        alert("오류가 발생했습니다.");
        console.log(error);
    });
}