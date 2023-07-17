import ApiService from "./axios";
import { partnerHeaders } from "./headers";

const CouponService = {
    getCoupons: () => {
        return ApiService.get("/coupons", partnerHeaders());
    },
    makeCoupon: (param) => {
        return ApiService.post("/coupons", param, partnerHeaders());
    }
}

export default CouponService;