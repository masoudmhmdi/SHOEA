import { Router } from '../../router';
import GetHtml from '../../services/instance/GetHtmlPage';

export const OneBrandPage = async () => {
  const oneBrandBody = await GetHtml('oneBrand.html');
  document.body = oneBrandBody;
  window.addEventListener('popstate', () => {
    Router().navigate('/home');
  });
};
