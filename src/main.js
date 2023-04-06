import { Router } from './router';
import './styles/style.css';

console.log(Router().resolve());

window.addEventListener('popstate', Router);
