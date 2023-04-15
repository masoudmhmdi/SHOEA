import { getProduct } from '../instance/GetProduct';

export const getSingleProduct = (id) => {
  return getProduct(`/${id}`).then((res) => res.data);
};
