import { renderCard } from '../logic/RenderCard';
import { Router } from '../router';
import { getUserData } from '../services/apis/getUserData';
import GetHtml from '../services/instance/GetHtmlPage';
import { getProduct } from '../services/instance/GetProduct';

export const wishlistPage = async () => {
  let wishlistBody = await GetHtml('wishlist.html');
  document.body = wishlistBody;

  let cardContainer = document.getElementById('cardContainer');
  let backBtn = document.getElementById('back');

  let user = await getUserData(localStorage.getItem('id'));
  let wishlistId = user.wishlist;
  console.log(wishlistId);

  async function init() {
    let product = await getProduct();
    let filterData = [...product.data].filter((item) => {
      return wishlistId.includes(item.id);
    });
    console.log(filterData);
    renderCard(filterData, cardContainer);
  }

  backBtn.addEventListener('click', () => {
    Router().navigate('/home');
  });

  init();
};
