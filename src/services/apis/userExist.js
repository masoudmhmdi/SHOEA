import GetUsers from '../instance/GetUsers';

export const userExist = (email) => {
  return GetUsers(`?email=${email}`).then((res) => res.data);
};
