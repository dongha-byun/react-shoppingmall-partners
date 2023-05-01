import ApiService, { api } from "./axios";
import { partnerHeaders } from "./headers";

const OrderService = {
    findPartnersOrder: async(status, startDate, endDate) => {
        let url = "/partners/orders?status=" + status + "&startDate="+ startDate + "&endDate="+endDate;
        return ApiService.get(url, partnerHeaders());
    },
    outing: async(orderId) => {
        let url = "/orders/"+orderId+"/outing";
        return ApiService.put(url, '', partnerHeaders());
    }
}

export default OrderService;