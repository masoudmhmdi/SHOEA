import Navigo from 'navigo';
import { StarterPage } from '../logic/StarterPage';
import { WelcomePage } from '../logic/WelcomePage';

export const Router = () => {
  const router = new Navigo('/');

  router.on('/', StarterPage);
  router.on('/welcome', WelcomePage);

  return router;
};
