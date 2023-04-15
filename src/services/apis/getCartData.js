import { getUserData } from './getUserData';

export const getCartData = (id) => {
  return getUserData(id).then((res) => res.cart);
};
