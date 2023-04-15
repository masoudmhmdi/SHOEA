import { Router } from '../../router';
import GetHtml from '../../services/instance/GetHtmlPage';
import Navigo from 'navigo';
import { renderCard } from '../RenderCard';
import { getProduct } from '../../services/instance/GetProduct';
import { get4Product } from '../../services/apis/get4Product';
import { get4ProductOfAllCategory } from '../../services/apis/get4ofAllCategory';

export const HomePage = async () => {
  const homeBody = await GetHtml('Home.html');
  document.body = homeBody;
  let categoryBtnContainer = document.getElementById('brandBtnCategorySection');
  let scrollbarCategoryBtn = document.querySelectorAll('.scrollbarBtn');
  let scrollCategoryBtn = document.getElementById('scrollCategoryBtn');
  let cardContainer = document.getElementById('cardContainer');
  let seeAllBtn = document.getElementById('seeAllBtn');
  let actionBarContainer = document.getElementById('actionBarContainer');
  init();
  //functions
  function renderBtn(element) {
    element.remove();
    scrollbarCategoryBtn.forEach((btn) => {
      btn.style.backgroundColor = 'white';
      btn.style.color = '#343A40';
      btn.dataset.filter = 'false';
    });
    scrollCategoryBtn.prepend(element);
    element.style.backgroundColor = '#343A40';
    element.style.color = 'white';
    element.dataset.filter = 'true';
  }
  async function init() {
    let product = await get4ProductOfAllCategory();
    renderCard(product, cardContainer);
  }
  //Refactor code withe event delegation instead of a loop of addEventListener
  categoryBtnContainer.addEventListener('click', (e) => {
    let isBtn = e.target.closest('button');
    if (isBtn) {
      Router().navigate(`/brand/${isBtn.name}`);
    }
  });
  //Event Listener
  scrollCategoryBtn.addEventListener('click', async (e) => {
    let targetBtn = e.target.closest('button');
    if (targetBtn) {
      renderBtn(targetBtn);
      let category = targetBtn.textContent.trim();
      if (category === 'All') {
        init();
      } else {
        let product = await get4Product(category);
        renderCard(product, cardContainer);
      }
    }
  });
  actionBarContainer.addEventListener('click', (e) => {
    let btnExist = e.target.closest('button');
    btnExist && Router().navigate(`/${btnExist.name}`);
  });
};
