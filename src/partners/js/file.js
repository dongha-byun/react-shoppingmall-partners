import ApiService from "./axios";
import { partnerHeaders } from "./headers";

const FileService = {
    saveTempFile: (file) => {
        const formData = new FormData();
        formData.append("file", file);

        let url = "/files/temp";
        return ApiService.post(url, formData, partnerHeaders("multipart/form-data"));
    }
}

export default FileService;