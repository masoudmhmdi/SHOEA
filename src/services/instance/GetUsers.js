import axios from 'axios';

const userRequest = axios.create({
  baseURL: 'http://localhost:3000/users',
});

export default userRequest;
