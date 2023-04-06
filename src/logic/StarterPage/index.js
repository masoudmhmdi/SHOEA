import { Router } from '../../router';
import GetHtml from '../../services/instance/GetHtmlPage';
export const StarterPage = async () => {
  //set request to get welcome page
  const response = await GetHtml('starter.html');
  //assign new body
  document.body = response;
  //go to welcome page
  setTimeout(() => {
    Router().navigate('/welcome');
  }, 3000);
};
