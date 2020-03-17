import axios from 'axios';
require('dotenv').config();

export const getProducts = data => {
  const limit = 6;
  const page = data.activePage || 1;
  const category = data.activeCategory || '';
  const name = data.searchName || '';
  const sortBy = data.sort || 'id';
  const sort = data.by || 'ASC';
  return {
    type: 'GET_PRODUCTS',
    payload: axios({
      method: 'GET',
      url: `http://localhost:4444/product/?limit=${limit}&page=${page}&category=${category}&name=${name}&sortBy=${sortBy}&sort=${sort}`,
    }),
  };
};

export const addProduct = data => {
  return {
    type: 'POST_PRODUCT',
    payload: axios({
      method: 'POST',
      data: data,
      url: 'http://localhost:4444/product',
    }),
  };
};

export const editProduct = (data, propsId) => {
  return {
    type: 'PATCH_PRODUCT',
    payload: axios({
      method: 'PATCH',
      data: data,
      url: `http://localhost:4444/product/${propsId}`,
    }),
  };
};

export const deleteProduct = propsId => {
  return {
    type: 'DELETE_PRODUCT',
    payload: axios({
      method: 'DELETE',
      url: `http://localhost:4444/product/${propsId}`,
    }),
  };
};

export const filterProduct = (category, name) => {
  const authorization = localStorage.getItem('token');
  const userId = localStorage.getItem('user-id');
  return {
    type: 'FILTER_PRODUCT',
    payload: axios({
      method: 'GET',
      url: `http://localhost:4444/product?name=${name}&category=${category}`,
      headers: {
        authorization: authorization,
        'user-id': userId,
      },
    }),
  };
};
