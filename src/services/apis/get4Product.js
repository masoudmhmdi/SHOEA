import { getProduct } from '../instance/GetProduct';

export const get4Product = (brand) => {
  return getProduct(`?brand=${brand}&_page=1&_limit=4`).then((res) => res.data);
};
