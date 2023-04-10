import { getProduct } from '../instance/GetProduct';

export const get4ProductOfAllCategory = (brand) => {
  return getProduct(`?_page=1&_limit=4`).then((res) => res.data);
};
