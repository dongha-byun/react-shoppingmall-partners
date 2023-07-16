import ApiService from "./axios";
import { partnerHeaders } from "./headers";

const CouponService = {
    getCoupons: () => {
        return ApiService.get("/coupons", partnerHeaders());
    }
}

export default CouponService;