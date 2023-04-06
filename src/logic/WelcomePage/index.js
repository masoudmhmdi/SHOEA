import { Router } from '../../router';
import GetHtml from '../../services/instance/GetHtmlPage';

export const WelcomePage = async () => {
  //set request to get welcome page
  const response = await GetHtml('welcome.html');
  //assign new body
  document.body = response;
};
