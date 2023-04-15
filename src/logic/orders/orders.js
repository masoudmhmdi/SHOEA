import { Router } from '../../router';
import GetHtml from '../../services/instance/GetHtmlPage';

export const orders = async () => {
  let ordersBody = await GetHtml('orders.html');
  document.body = ordersBody;
  //select Elements
  let actionBarContainer = document.getElementById('actionBarContainer');
  //EventListeners
  actionBarContainer.addEventListener('click', (e) => {
    let btnExist = e.target.closest('button');
    btnExist && Router().navigate(`/${btnExist.name}`);
  });
};
