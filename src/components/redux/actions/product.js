import axios from "axios";
require("dotenv").config();

export const getProducts = (data) => {
  const limit = data.limit || 6;
  const page = data.activePage || 1;
  const name = data.searchName || "";
  return {
    type: "GET_PRODUCT",
    payload: axios({
      method: "GET",
      url: `${process.env.REACT_APP_URL}/product?limit=${limit}&page=${page}&name=${name}`,
    }),
  };
};

export const addProduct = (data) => {
  return {
    type: "POST_PRODUCT",
    payload: axios({
      method: "POST",
      data: data,
      url: `${process.env.REACT_APP_URL}/product`,
    }),
  };
};

export const editProduct = (data, propsId) => {
  return {
    type: "PATCH_PRODUCT",
    payload: axios({
      method: "PATCH",
      data: data,
      url: `${process.env.REACT_APP_URL}/product/${propsId}`,
    }),
  };
};

export const deleteProduct = (propsId) => {
  return {
    type: "DELETE_PRODUCT",
    payload: axios({
      method: "DELETE",
      url: `${process.env.REACT_APP_URL}/product/${propsId}`,
    }),
  };
};
