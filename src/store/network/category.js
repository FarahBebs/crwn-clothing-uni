import axios from "axios";

export const getCategories = async () => {
  try {
    const response = await axios.get("/categories");
    return response.data; // Assume the response contains the categories data
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getProductsByCategoryId = async (categoryId) => {
  try {
    const response = await axios.get(`/products/${categoryId}`);
    return response.data; // Assume the response contains the products data
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getProductById = async (productId) => {
  try {
    const response = await axios.get(`/products/product/${productId}`);
    return response.data; // Assume the response contains the product data
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const addProduct = async (product) => {
  try {
    const response = await axios.put("/products/add", product);
    return response.data; // Assume the response contains the added product data
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const editProduct = async (product) => {
  try {
    const response = await axios.post("/products/edit", product);
    return response.data; // Assume the response contains the added product data
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const deleteProduct = async (productId) => {
  try {
    const response = await axios.delete(`/products/${productId}`);
    return response.data; // Assume the response contains the deleted product data
  } catch (error) {
    throw error.response?.data || error.message;
  }
};
