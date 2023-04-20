import GetHtml from '../../services/instance/GetHtmlPage';
import { Router } from '../../router/index';

import { getCartData } from '../../services/apis/getCartData';
import { RenderCheckoutCart } from '../RenderCheckoutCart';
import { patchUser } from '../../services/apis/patchuser';
import { getUserData } from '../../services/apis/getUserData';

export const Checkout = async () => {
  let CheckoutBody = await GetHtml('checkout.html');
  document.body = CheckoutBody;
  //select Element
  let backBtn = document.getElementById('back');
  let cartContainer = document.getElementById('cartContainer');
  let editLocationBtn = document.getElementById('editLocation');
  let editShippingBtn = document.getElementById('editShipping');
  let locationTitle = document.getElementById('locationTitle');
  let amountContainer = document.getElementById('amountContainer');
  let paymentBtn = document.getElementById('payment');

  let promoContainer = document.getElementById('promoContainer');
  //get user data
  let cartData = await getUserData(localStorage.getItem('id'));
  console.log(cartData);

  let newOrder = {
    product: [...cartData.cart],
    status: 'active',
    total: 0,
  };
  //get Cart Data
  let localCartData = [...cartData.cart];

  //functions
  function init() {
    RenderCheckoutCart(localCartData, cartContainer);
    if (cartData.discount === '30') {
      handlePromoCode('Gold', promoContainer, '');
    } else if (cartData.discount === '15') {
      handlePromoCode('Silver', promoContainer, '');
    } else if (cartData.discount === '10') {
      handlePromoCode('Bronze', promoContainer, '');
    } else {
      handlePromoCode('', promoContainer, '');
    }
    handlePrice();
    locationTitle.textContent = cartData.location;
  }

  function deletePromo() {
    cartData.discount = '';
    console.log(cartData);
    patchUser(localStorage.getItem('id'), { discount: '' });
    handlePromoCode(null, promoContainer, null);
    handlePrice();
  }

  function renderPromoUi(discount) {
    let x = `
    <div
        class=" bg-black rounded-30  flex gap-2  justify-between items-center py-1 px-4"
    >
        <span class="text-white text-lg font-semibold">Discount ${discount}% off</span>

        <button class=" text-white" id="deletePromo">
        <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier" stroke-width="0"/>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
            <g id="SVGRepo_iconCarrier"> <g id="Menu / Close_MD"> <path id="Vector" d="M18 18L12 12M12 12L6 6M12 12L18 6M12 12L6 18" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g> </g>
        </svg>
        </button>
        
    </div>
    <button
        id="addPromo"
        class="w-12 h-12 bg-black rounded-full text-white text-4xl font-semibold flex justify-center items-center"
    >
        <span >
        <svg
            class="text-white"
            width="20px"
            height="20px"
            viewBox="0 0 24.00 24.00"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />
            <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            />
            <g id="SVGRepo_iconCarrier">
            <path
                class="fill-current"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z"
                fill="#000000"
            />
            </g>
        </svg>
        </span>
        </button>`;
    return x;
  }

  function addPromo(p) {
    cartData.discount = `${p}`;

    patchUser(localStorage.getItem('id'), { discount: `${p}` });
    handlePromoCode(p, promoContainer, null);
    handlePrice();
  }

  function handleChangeLocation() {
    let allLocation = document.querySelectorAll("input[type='radio']");
    allLocation.forEach((loc) => {
      if (loc.checked) {
        localCartData.location = loc.id;
        console.log(localCartData);
        patchUser(localStorage.getItem('id'), { location: loc.id });
      }
    });
  }
  function handleChangeShipping() {
    let allShipping = document.querySelectorAll("input[type='radio']");
    allShipping.forEach((ship) => {
      if (ship.checked) {
        cartData.shipping = {
          shippingType: ship.id,
          price: ship.dataset.price,
        };
        console.log(localCartData);
        patchUser(localStorage.getItem('id'), {
          shipping: cartData.shipping,
        });
      }
    });
  }
  const handlePromoCode = (code, container, massage) => {
    if (code === 'Gold') {
      addPromo(30);
      container.innerHTML = renderPromoUi(30);
      container.nextElementSibling.textContent = '';
      let promoBtn = document.getElementById('deletePromo');
      promoBtn.addEventListener('click', deletePromo);
    } else if (code === 'Silver') {
      addPromo(15);
      container.innerHTML = renderPromoUi(15);
      container.nextElementSibling.textContent = '';
      let promoBtn = document.getElementById('deletePromo');
      console.log(promoBtn);
      promoBtn.addEventListener('click', deletePromo);
    } else if (code === 'Bronze') {
      addPromo(10);
      container.innerHTML = renderPromoUi(10);
      container.nextElementSibling.textContent = '';
      let promoBtn = document.getElementById('deletePromo');
      console.log(promoBtn);
      promoBtn.addEventListener('click', deletePromo);
    } else {
      container.innerHTML = `<input
          type="text"
          placeholder="Enter Promo Code"
          class="bg-primary rounded-lg py-3 placeholder:text-xs px-2 flex-1"
        />
        <button
          id="addPromo"
          class="w-12 h-12 bg-black rounded-full text-white text-4xl font-semibold flex justify-center items-center"
        >
          <span>
            <svg
              class="text-white"
              width="20px"
              height="20px"
              viewBox="0 0 24.00 24.00"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />
              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                <path
                  class="fill-current"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z"
                  fill="#000000"
                />
              </g>
            </svg>
          </span>
          </button>`;
      container.nextElementSibling.textContent = massage;
      let addPromoBtn = document.getElementById('addPromo');
      addPromoBtn.addEventListener('click', (e) => {
        let promoCode =
          e.target.closest('button').previousElementSibling?.value;
        handlePromoCode(promoCode, promoContainer, 'Code is Wrong!');
      });
    }
  };

  function handlePrice() {
    let amount = localCartData.reduce((a, p) => {
      return a + +p.totalPrice;
    }, 0);
    let shipping = cartData.shipping.price;
    let promo = amount * (cartData.discount / 100);
    let total = amount - promo;
    let html = `      <div class="w-full rounded-lg bg-white flex flex-col gap-4 p-6 shadow-lg">
    <div class="flex items-center justify-between">
      <span class="text-sm text-gray-600">Amount</span>
      <span class="text-sm text-gray-600">$${amount}</span>
    </div>
    <div class="flex items-center justify-between">
      <span class="text-sm text-gray-600">Shipping</span>
      <span class="text-sm text-gray-600">$${shipping}</span>
    </div>
    <div
      class="flex items-center justify-between pb-2 border-b border-primary"
    >
      <span class="text-sm text-gray-600">Promo</span>
      <span class="text-sm text-gray-600">- $${promo}</span>
    </div>
    <div class="flex items-center justify-between">
      <span class="text-sm text-gray-600">Total</span>
      <span class="text-sm text-gray-600">$${total}</span>
    </div>
  </div>`;
    amountContainer.innerHTML = html;
    newOrder.total = total;
    console.log(newOrder);
  }

  //eventListener
  backBtn.addEventListener('click', () => {
    Router().navigate('/cart');
  });

  editLocationBtn.addEventListener('click', async () => {
    let x = await GetHtml('editLocation.html');
    document.body = x;

    let backBtn = document.getElementById('back');
    let applyLocationBtn = document.getElementById('applyLocation');

    applyLocationBtn.addEventListener('click', async () => {
      handleChangeLocation();
      Router().navigate('/checkout');
    });

    backBtn.addEventListener('click', () => {
      Router().navigate('/checkout');
    });
  });

  editShippingBtn.addEventListener('click', async () => {
    let x = await GetHtml('shipping.html');
    document.body = x;
    //select
    let backBtn = document.getElementById('back');
    let applyShippingTypeBtn = document.getElementById('applyShippingType');
    applyShippingTypeBtn.addEventListener('click', () => {
      handleChangeShipping();
      Router().navigate('/checkout');
    });
    //events
    backBtn.addEventListener('click', () => {
      Router().navigate('/checkout');
    });
  });

  paymentBtn.addEventListener('click', () => {
    patchUser(localStorage.getItem('id'), {
      orders: [...cartData.orders, newOrder],
    });
    Router().navigate('/payment');
  });
  init();
};
