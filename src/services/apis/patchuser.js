import axios from 'axios';

export const patchUser = (id, data) => {
  axios.patch(`http://localhost:3000/users/${id}`, data);
};
