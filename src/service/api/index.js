import ajax from "./ajax";
const BASE_URL = "http://demo.itlike.com/web/xlmc"

// http://demo.itlike.com/web/xlmc/api/homeApi/categories
// http://demo.itlike.com/web/xlmc/api/homeApi/categoriesdetail
export const getHomeData = () => ajax(BASE_URL + "/api/homeApi");
export const getCategories = () => ajax(BASE_URL + "/api/homeApi/categories");
export const getCategoriesDetail = (perParam) => ajax(BASE_URL + "/api/homeApi/categoriesdetail"+perParam);
