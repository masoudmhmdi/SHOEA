import { Router } from '../../router';
import { getAllProductInCategory } from '../../services/apis/getAllProductInCategory';
import GetHtml from '../../services/instance/GetHtmlPage';
import { renderCard } from '../RenderCard';

export const OneBrandPage = async (match) => {
  const oneBrandBody = await GetHtml('oneBrand.html');
  document.body = oneBrandBody;
  let data = await getAllProductInCategory(match.data.name);
  console.log(data);
  //selects
  let backBtn = document.getElementById('backBtn');
  let brandName = document.getElementById('brandName');
  let cardContainer = document.getElementById('cardContainer');
  console.log(cardContainer);
  renderCard(data, cardContainer);
  brandName.textContent = match.data.name;

  //EventListeners
  backBtn.addEventListener('click', () => {
    Router().navigate('/home');
  });
  window.addEventListener('popstate', () => {
    Router().navigate('/home');
  });
};
