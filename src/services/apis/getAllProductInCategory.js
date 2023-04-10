import { getProduct } from '../instance/GetProduct';

export const getAllProductInCategory = (brand) => {
  return getProduct(`?brand=${brand}`).then((res) => res.data);
};
