import ApiService from "./axios";
import { partnerHeaders } from "./headers";

const ProductQnaAnswerService = {
    saveAnswer: async(productId, qnaId, param) => {
        return ApiService.post(
            "/products/" + productId + "/qna/" + qnaId + "/answer", param, partnerHeaders()
        );
    }
}

export default ProductQnaAnswerService;