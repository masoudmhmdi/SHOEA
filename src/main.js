import { Router } from './router';
import { getProduct } from './services/instance/GetProduct';
import './styles/style.css';
// window.addEventListener('popstate', () => {
//   console.log('test');
//   if (location.pathname === '/welcome') {
//     Router().navigate('/home');
//   } else {
//     console.log(location.pathname);
//   }
// });

Router().navigate(location.pathname);
