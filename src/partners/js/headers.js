export function partnerHeaders(contentType) {
    let headers = {
        headers: {
            Authorization: "Bearer " + getStorageItem("partner-token"),
            "Content-Type": contentType ? contentType : "application/json"
        }
    }
    return headers;
}

export function getStorageItem(key) {
    return sessionStorage.getItem(key);
}

export function removeStorageItem(key) {
    sessionStorage.removeItem(key);
}

export function setStorageItem(key, value) {
    sessionStorage.setItem(key, value);
}