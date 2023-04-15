import userRequest from '../instance/GetUsers';

export const getUserData = (id) => {
  return userRequest(`/${id}`).then((res) => res.data);
};
