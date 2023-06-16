import ApiService from "./axios";
import { partnerHeaders } from "./headers";

const OrderService = {
    findPartnersOrder: async(type, startDate, endDate) => {
        let url = "/partners/orders" +
                    "?type=" + type + 
                    "&startDate=" + startDate + 
                    "&endDate=" + endDate;
        return ApiService.get(url, partnerHeaders());
    },
    outing: async(orderId, orderItemId) => {
        let url = "/orders/"+orderId+"/" + orderItemId + "/outing";
        return ApiService.put(url, '', partnerHeaders());
    }
}

export default OrderService;