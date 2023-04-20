import { Router } from '../../router';
import { getUserData } from '../../services/apis/getUserData';
import GetHtml from '../../services/instance/GetHtmlPage';
import { RenderOrdersCard } from '../RenderOrderCacd';

export const orders = async () => {
  let ordersBody = await GetHtml('orders.html');
  document.body = ordersBody;
  //select Elements
  let actionBarContainer = document.getElementById('actionBarContainer');
  let labelContainer = document.getElementById('labelContainer');
  let renderCartContainer = document.getElementById('renderCart');
  let labels = document.querySelectorAll('label');
  let userData = await getUserData(localStorage.getItem('id'));
  let orderData = userData.orders;
  // console.log(orderData);

  //EventListeners
  actionBarContainer.addEventListener('click', (e) => {
    let btnExist = e.target.closest('button');
    btnExist && Router().navigate(`/${btnExist.name}`);
  });

  function renderItem(status) {
    let products = [];
    orderData.forEach((i) => {
      if (i.status === status) {
        products.push(...i.product);
      }
    });
    console.log(products);
    renderCartContainer.innerHTML = '';
    if (products.length) {
      console.log('we have prodoct');
      RenderOrdersCard(products, renderCartContainer);
    } else {
      console.log('we dont have prodoct');
      let img = document.createElement('img');
      img.setAttribute('src', './asset/png/notFound.png');
      img.className = 'w-3/4 object-cover';
      let p1 = document.createElement('p');
      p1.className = 'font-medium';
      p1.append("You don't have an order yet!");
      let p2 = document.createElement('p');
      p2.append();
      renderCartContainer.append(img, p1);
    }
  }

  function handleToggle() {
    labels.forEach((t) => {
      let child = t.children;
      if (t.dataset.active === 'true') {
        child[1].style.backgroundColor = 'black';
        child[1].style.height = '4px';
        child[1].style.marginTop = '0px';
        child[0].classList.add('font-medium');
        // console.log(t);
        // renderItem(t.id);
      } else {
        child[1].style.backgroundColor = '';
        child[1].style.height = '1px';
        child[1].style.marginTop = '1px';
        child[0].classList.remove('font-medium');
      }
    });
  }
  labelContainer.addEventListener('click', (e) => {
    labels.forEach((i) => (i.dataset.active = false));
    let state = e.target.closest('label');
    state.dataset.active = true;
    handleToggle();
    renderItem(state.id);
  });
  handleToggle();
  renderItem('active');
};
