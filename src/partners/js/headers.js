export function partnerHeaders(contentType) {
    let headers = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("partner-token"),
            "Content-Type": contentType ? contentType : "application/json"
        }
    }
    return headers;
}