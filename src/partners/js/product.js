import ApiService from "./axios";
import { partnerHeaders } from "./headers";

const ProductService = {
    
    getProducts: async (categoryId, subCategoryId, limit, offset) => {
        let url = "/partners/products" + 
                    "?categoryId="+categoryId+
                    "&subCategoryId="+subCategoryId+
                    "&limit="+limit+
                    "&offset="+offset;

        return ApiService.get(url, partnerHeaders());
    },
    getProduct: async (productId) => {
        return ApiService.get("/products/"+productId);
    },
    saveProduct: async(formData) => {
        ApiService.post("/products", formData, partnerHeaders("multipart/form-data"))
        .then(result => {
            alert('상품등록이 완료 되었습니다.');
            window.location.href = "/partners/products";
        })
        .catch(error => {
            alert("상품 등록 과정에서 문제가 발생했습니다. 잠시 뒤 다시 시도해주세요.");
            console.log(error);
        });
    }
}

export default ProductService;