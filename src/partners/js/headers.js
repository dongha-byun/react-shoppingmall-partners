export function partnerHeaders() {
    let headers = {
        headers: {
            Authorization: "Bearer " + localStorage.getItem("partner-token")
        }
    }

    return headers;
}