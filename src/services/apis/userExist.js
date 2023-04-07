import GetUsers from '../instance/GetUsers';

export const userExist = (email) => {
  return GetUsers(`/users?email=${email}`).then((res) => res.data);
};
