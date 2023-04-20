import ApiService from "./axios";

const CategoryService = {
    getCategories: async() => {
        return ApiService.get("/categories");
    }
}

export default CategoryService;

export function getCategory(categories, categoryId){
    return categories.find(({ id }) => id == categoryId);
}

export function getSubCategories({ categories, categoryId, subCategoryId }) {
    return categories
      .find(({ id }) => id == categoryId)
      .subCategories.find(({ id }) => id == subCategoryId);
}