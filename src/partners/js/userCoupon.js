import ApiService from "./axios";
import { partnerHeaders } from "./headers";

const UserCouponService = {
    getUserListOfCouponReceived: (couponId) => {
        return ApiService.get("/coupons/"+couponId+"/users", partnerHeaders());
    }
}

export default UserCouponService;