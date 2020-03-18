import axios from 'axios';
import 'dotenv/config';
<<<<<<< HEAD

=======
>>>>>>> desain-web
export const getCategory = () => {
  return {
    type: 'GET_CATEGORY',
    payload: axios({
      method: 'GET',
<<<<<<< HEAD
      url: 'http://localhost:4444/category',
    }),
  };
};

export const addCategory = data => {
  return {
    type: 'POST_CATEGORY',
    payload: axios({
      method: 'POST',
      data: data,
      url: 'http://localhost:4444/category',
=======
      url: `${process.env.REACT_APP_URL}/category`,
>>>>>>> desain-web
    }),
  };
};

<<<<<<< HEAD
=======
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

>>>>>>> desain-web
export const deleteCategory = propsId => {
  return {
    type: 'DELETE_CATEGORY',
    payload: axios({
      method: 'DELETE',
<<<<<<< HEAD
      url: `http://localhost:4444/category/${propsId}`,
=======
      url: `${process.env.REACT_APP_URL}/category/${propsId}`,
>>>>>>> desain-web
    }),
  };
};

export const editCategory = (data, propsId) => {
  return {
    type: 'PATCH_CATEGORY',
    payload: axios({
      method: 'PATCH',
      data: data,
<<<<<<< HEAD
      url: `http://localhost:4444/category/${propsId}`,
=======
      url: `${process.env.REACT_APP_URL}/category/${propsId}`,
>>>>>>> desain-web
    }),
  };
};
