import Navigo from 'navigo';
import { cart } from '../logic/cart';
import { HomePage } from '../logic/HomePage';
import { LoginPage } from '../logic/LoginPage';
import { OneBrandPage } from '../logic/oneBrandPage';
import { orders } from '../logic/orders/orders';
import { StarterPage } from '../logic/StarterPage';
import { WelcomePage } from '../logic/WelcomePage';
import { singleProduct } from '../logic/singleProduct';

export const Router = () => {
  const router = new Navigo('/');

  router.on('/', StarterPage);
  router.on('/welcome', WelcomePage);
  router.on('/home', HomePage);
  router.on('/login', LoginPage);
  router.on('/brand/:name', (match) => {
    OneBrandPage(match);
  });
  router.on('/product/:id', (match) => {
    singleProduct(match);
  });
  router.on('/cart', cart);
  router.on('/orders', orders);

  // router.resolve();
  return router;
};
