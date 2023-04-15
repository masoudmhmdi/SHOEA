import { Router } from '../../router';
import { getCartData } from '../../services/apis/getCartData';
import { patchUser } from '../../services/apis/patchuser';
import GetHtml from '../../services/instance/GetHtmlPage';
import { RenderCartCard } from '../RenderCartCard';

export const cart = async () => {
  let ordersBody = await GetHtml('cart.html');
  document.body = ordersBody;
  let CartData = await getCartData(localStorage.getItem('id'));
  let localCartData = [...CartData];
  console.log(localCartData);

  //select Elements
  let actionBarContainer = document.getElementById('actionBarContainer');
  let cartContainer = document.getElementById('cartContainer');
  let totalAmount = document.getElementById('totalAmount');
  //functions

  async function handleTotalAmount() {
    let allAmount = 0;
    localCartData.forEach((item) => {
      console.log(item.totalPrice);
      allAmount += item.totalPrice;
    });
    totalAmount.textContent = `$${allAmount}.00`;
    console.log(allAmount);
  }
  handleTotalAmount();

  async function handleMinus(id) {
    localCartData.forEach((item) => {
      if (item.id === +id) {
        if (item.quantity > 1) {
          --item.quantity;
          item.totalPrice = item.price * item.quantity;
        }
      }
    });
    console.log(localCartData);

    patchUser(localStorage.getItem('id'), { cart: localCartData });
    handleTotalAmount();
  }
  async function handlePlus(id) {
    localCartData.forEach((item) => {
      if (item.id === +id) {
        ++item.quantity;
        item.totalPrice = item.price * item.quantity;
      }
    });
    patchUser(localStorage.getItem('id'), { cart: localCartData });
    handleTotalAmount();
  }
  //Render Cart
  function render(data) {
    RenderCartCard(data, cartContainer);
  }
  render(localCartData);

  //select Element
  let allMinsBtn = document.querySelectorAll('#minus');
  let allPlusBtn = document.querySelectorAll('#plus');
  let allDeleteBtn = document.querySelectorAll('.deleteBtn');

  //EventListeners
  actionBarContainer.addEventListener('click', (e) => {
    let btnExist = e.target.closest('button');
    btnExist && Router().navigate(`/${btnExist.name}`);
  });
  //handleMin
  allMinsBtn.forEach((min) => {
    min.addEventListener('click', (e) => {
      let id = e.target.closest('.card')?.dataset.id;

      handleMinus(id);
      let quantity = e.target.closest('button').nextElementSibling;
      let totalPrice = quantity.parentElement.previousElementSibling;
      console.log(totalPrice);
      let data = localCartData.find((i) => i.id === +id);

      quantity.innerHTML = data.quantity;
      totalPrice.textContent = `$${data.totalPrice}`;
    });
  });
  //handlePlus
  allPlusBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      let id = e.target.closest('.card')?.dataset.id;

      handlePlus(id);
      let quantity = e.target.closest('button').previousElementSibling;
      let totalPrice = quantity.parentElement.previousElementSibling;
      console.log(totalPrice);
      let data = localCartData.find((i) => i.id === +id);

      quantity.innerHTML = data.quantity;
      totalPrice.textContent = `$${data.totalPrice}`;
    });
  });
  allDeleteBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      let btn = e.target.closest('.card')?.dataset.id;
      console.log(btn);
    });
  });
};
