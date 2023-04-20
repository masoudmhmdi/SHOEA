import Navigo from 'navigo';
import { cart } from '../logic/cart';
import { HomePage } from '../logic/HomePage';
import { LoginPage } from '../logic/LoginPage';
import { OneBrandPage } from '../logic/oneBrandPage';
import { orders } from '../logic/orders/orders';
import { StarterPage } from '../logic/StarterPage';
import { WelcomePage } from '../logic/WelcomePage';
import { singleProduct } from '../logic/singleProduct';
import { Checkout } from '../logic/Checkout';
import { Payment } from '../logic/PaymentPage';
import { SearchPage } from '../logic/searchPage';
import { seeAllPage } from '../seeAllPage';
import { wishlistPage } from '../wishlistPage';
import Cookies from 'js-cookie';

export const Router = () => {
  const router = new Navigo('/');

  // const privetRoute = (callBack) => {
  //   let cookieExist = Cookies.get('token');
  //   if (cookieExist) {
  //     callBack();
  //   } else {
  //     document.body = 'you dont have access this page';
  //   }
  // };

  router.on('/', () => {
    if (Cookies.get('token')) {
      Router().navigate('/home');
    } else {
      StarterPage();
    }
  });
  router.on('/welcome', () => {
    if (Cookies.get('token')) {
      Router().navigate('/home');
    } else {
      WelcomePage();
    }
  });
  router.on('/home', HomePage);
  router.on('/login', () => {
    if (Cookies.get('token')) {
      Router().navigate('/home');
    } else {
      LoginPage();
    }
  });
  router.on('/brand/:name', (match) => {
    OneBrandPage(match);
  });
  router.on('/product/:id', (match) => {
    singleProduct(match);
  });
  router.on('/cart', cart);
  router.on('/orders', orders);
  router.on('/checkout', Checkout);
  router.on('/payment', Payment);
  router.on('/search', SearchPage);
  router.on('/seeAll', seeAllPage);
  router.on('/wishlist', wishlistPage);

  // router.resolve();
  return router;
};
