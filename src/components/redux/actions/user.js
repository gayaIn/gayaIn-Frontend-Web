import axios from 'axios';

export const getUser = () => {
  return {
    type: 'GET_USER',
    payload: axios({
      method: 'GET',
      url: 'http://localhost:4444/user',
    }),
  };
};
export const postUser = data => {
  return {
    type: 'POST_USER',
    payload: axios({
      method: 'POST',
      url: 'http://localhost:4444/user/register',
      data: data,
    }),
  };
};
export const editUser = (userId, data) => {
  return {
    type: 'UPDATE_USER',
    payload: axios({
      method: 'PATCH',
      url: `http://localhost:4444/user/${userId}`,
      data: data,
    }),
  };
};
export const deleteUser = UserId => {
  return {
    type: 'DELETE_USER',
    payload: axios({
      method: 'DELETE',
      url: `http://localhost:4444/user/${UserId}`,
    }),
  };
};
