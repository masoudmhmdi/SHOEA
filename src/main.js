import { Router } from './router';
import './styles/style.css';
Router().navigate(location.pathname);
window.addEventListener('popstate', Router);
