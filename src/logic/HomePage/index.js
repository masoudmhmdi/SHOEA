import { Router } from '../../router';
import GetHtml from '../../services/instance/GetHtmlPage';
import Navigo from 'navigo';

export const HomePage = async () => {
  const homeBody = await GetHtml('Home.html');
  document.body = homeBody;
  let nikeBtn = document.querySelectorAll('.brandBtn');
  //event listener
  nikeBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
      Router().navigate(`/brand/${btn.name}`);
    });
  });
};
