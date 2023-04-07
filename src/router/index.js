import Navigo from 'navigo';
import { HomePage } from '../logic/HomePage';
import { LoginPage } from '../logic/LoginPage';
import { StarterPage } from '../logic/StarterPage';
import { WelcomePage } from '../logic/WelcomePage';

export const Router = () => {
  const router = new Navigo('/');

  router.on('/', StarterPage);
  router.on('/welcome', WelcomePage);
  router.on('/home', HomePage);
  router.on('/login', LoginPage);

  return router;
};
