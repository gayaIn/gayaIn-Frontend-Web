import axios from 'axios';
import 'dotenv/config';
export const getCategory = () => {
  return {
    type: 'GET_CATEGORY',
    payload: axios({
      method: 'GET',
      url: `${process.env.REACT_APP_URL}/category`,
    }),
  };
};

export const addCategory = data => {
  return {
    type: 'POST_CATEGORY',
    payload: axios({
      method: 'POST',
      data: data,
      url: `${process.env.REACT_APP_URL}/category`,
    }),
  };
};

export const deleteCategory = propsId => {
  return {
    type: 'DELETE_CATEGORY',
    payload: axios({
      method: 'DELETE',
      url: `${process.env.REACT_APP_URL}/category/${propsId}`,
    }),
  };
};

export const editCategory = (data, propsId) => {
  return {
    type: 'PATCH_CATEGORY',
    payload: axios({
      method: 'PATCH',
      data: data,
      url: `${process.env.REACT_APP_URL}/category/${propsId}`,
    }),
  };
};
