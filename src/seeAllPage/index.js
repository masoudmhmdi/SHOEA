import { renderCard } from '../logic/RenderCard';
import { Router } from '../router';
import { getAllProductInCategory } from '../services/apis/getAllProductInCategory';
import GetHtml from '../services/instance/GetHtmlPage';
import { getProduct } from '../services/instance/GetProduct';

export const seeAllPage = async () => {
  let seeAllBody = await GetHtml('seeAll.html');
  document.body = seeAllBody;

  let scrollCategoryBtn = document.getElementById('scrollCategoryBtn');
  let scrollbarCategoryBtn = document.querySelectorAll('.scrollbarBtn');
  let backBtn = document.getElementById('back');

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
    let product = await getProduct();
    let AllData = [...product.data];
    console.log(AllData);
    renderCard(AllData, cardContainer);
  }

  scrollCategoryBtn.addEventListener('click', async (e) => {
    let targetBtn = e.target.closest('button');
    if (targetBtn) {
      renderBtn(targetBtn);
      let category = targetBtn.textContent.trim();
      if (category === 'All') {
        init();
      } else {
        let product = await getAllProductInCategory(category);
        renderCard(product, cardContainer);
      }
    }
  });

  backBtn.addEventListener('click', () => {
    Router().navigate('/home');
  });
  init();
};
