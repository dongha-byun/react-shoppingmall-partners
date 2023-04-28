import { api } from "./axios";
import { partnerHeaders } from "./headers";

const ProductQnaService = {
    getPartnersProductQnaList: async(isAnswered) => {
        let response = await api.get("/partners/product/qnas?isAnswered="+isAnswered, partnerHeaders());
        return response.data;
    }
}

export default ProductQnaService;