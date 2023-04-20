import GetHtml from '../../services/instance/GetHtmlPage';
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

// import styles bundle
import 'swiper/css/bundle';
import { getSingleProduct } from '../../services/apis/getSingleProduct';
import { Router } from '../../router';
import { patchUser } from '../../services/apis/patchuser';
import { getUserData } from '../../services/apis/getUserData';

export const singleProduct = async (match) => {
  //paint DOM
  let singleProductBody = await GetHtml('singleProduct.html');
  document.body = singleProductBody;
  let data = await getSingleProduct(match.data.id);
  let userId = localStorage.getItem('id');
  let userData = await getUserData(userId);
  //global variable
  let toggleLike = {
    like: `<svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
     class="w-7 h-7" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve">
 <g>
   <path fill="#F76D57" d="M58.714,29.977c0,0-0.612,0.75-1.823,1.961S33.414,55.414,33.414,55.414C33.023,55.805,32.512,56,32,56
     s-1.023-0.195-1.414-0.586c0,0-22.266-22.266-23.477-23.477s-1.823-1.961-1.823-1.961C3.245,27.545,2,24.424,2,21
     C2,13.268,8.268,7,16,7c3.866,0,7.366,1.566,9.899,4.101l0.009-0.009l4.678,4.677c0.781,0.781,2.047,0.781,2.828,0l4.678-4.677
     l0.009,0.009C40.634,8.566,44.134,7,48,7c7.732,0,14,6.268,14,14C62,24.424,60.755,27.545,58.714,29.977z"/>
   <path fill="#F76D57" d="M58.714,29.977c0,0-0.612,0.75-1.823,1.961S33.414,55.414,33.414,55.414C33.023,55.805,32.512,56,32,56
     s-1.023-0.195-1.414-0.586c0,0-22.266-22.266-23.477-23.477s-1.823-1.961-1.823-1.961C3.245,27.545,2,24.424,2,21
     C2,13.268,8.268,7,16,7c3.866,0,7.366,1.566,9.899,4.101l0.009-0.009l4.678,4.677c0.781,0.781,2.047,0.781,2.828,0l4.678-4.677
     l0.009,0.009C40.634,8.566,44.134,7,48,7c7.732,0,14,6.268,14,14C62,24.424,60.755,27.545,58.714,29.977z"/>
   <g>
     <path fill="#394240" d="M48,5c-4.418,0-8.418,1.791-11.313,4.687l-3.979,3.961c-0.391,0.391-1.023,0.391-1.414,0
       c0,0-3.971-3.97-3.979-3.961C24.418,6.791,20.418,5,16,5C7.163,5,0,12.163,0,21c0,3.338,1.024,6.436,2.773,9
       c0,0,0.734,1.164,1.602,2.031s24.797,24.797,24.797,24.797C29.953,57.609,30.977,58,32,58s2.047-0.391,2.828-1.172
       c0,0,23.93-23.93,24.797-24.797S61.227,30,61.227,30C62.976,27.436,64,24.338,64,21C64,12.163,56.837,5,48,5z M58.714,29.977
       c0,0-0.612,0.75-1.823,1.961S33.414,55.414,33.414,55.414C33.023,55.805,32.512,56,32,56s-1.023-0.195-1.414-0.586
       c0,0-22.266-22.266-23.477-23.477s-1.823-1.961-1.823-1.961C3.245,27.545,2,24.424,2,21C2,13.268,8.268,7,16,7
       c3.866,0,7.366,1.566,9.899,4.101l0.009-0.009l4.678,4.677c0.781,0.781,2.047,0.781,2.828,0l4.678-4.677l0.009,0.009
       C40.634,8.566,44.134,7,48,7c7.732,0,14,6.268,14,14C62,24.424,60.755,27.545,58.714,29.977z"/>
     <path fill="#394240" d="M48,11c-0.553,0-1,0.447-1,1s0.447,1,1,1c4.418,0,8,3.582,8,8c0,0.553,0.447,1,1,1s1-0.447,1-1
       C58,15.478,53.522,11,48,11z"/>
   </g>
 </g>
 </svg>`,

    noLike: ` <svg
    class="w-7 h-7"
    version="1.0"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="800px"
    height="800px"
    viewBox="0 0 64 64"
    enable-background="new 0 0 64 64"
    xml:space="preserve"
  >
    <g>
      <path
        fill="#231F20"
        d="M48,6c-4.418,0-8.418,1.791-11.313,4.687l-3.979,3.961c-0.391,0.391-1.023,0.391-1.414,0
        c0,0-3.971-3.97-3.979-3.961C24.418,7.791,20.418,6,16,6C7.163,6,0,13.163,0,22c0,3.338,1.024,6.436,2.773,9
        c0,0,0.734,1.164,1.602,2.031s24.797,24.797,24.797,24.797C29.953,58.609,30.977,59,32,59s2.047-0.391,2.828-1.172
        c0,0,23.93-23.93,24.797-24.797S61.227,31,61.227,31C62.976,28.436,64,25.338,64,22C64,13.163,56.837,6,48,6z M58.714,30.977
        c0,0-0.612,0.75-1.823,1.961S33.414,56.414,33.414,56.414C33.023,56.805,32.512,57,32,57s-1.023-0.195-1.414-0.586
        c0,0-22.266-22.266-23.477-23.477s-1.823-1.961-1.823-1.961C3.245,28.545,2,25.424,2,22C2,14.268,8.268,8,16,8
        c3.866,0,7.366,1.566,9.899,4.101l0.009-0.009l4.678,4.677c0.781,0.781,2.047,0.781,2.828,0l4.678-4.677l0.009,0.009
        C40.634,9.566,44.134,8,48,8c7.732,0,14,6.268,14,14C62,25.424,60.755,28.545,58.714,30.977z"
      />
      <path
        fill="#231F20"
        d="M48,12c-0.553,0-1,0.447-1,1s0.447,1,1,1c4.418,0,8,3.582,8,8c0,0.553,0.447,1,1,1s1-0.447,1-1
        C58,16.478,53.522,12,48,12z"
      />
    </g>
  </svg>`,
  };

  let cartObj = {};
  //selects
  let addToCartBtn = document.getElementById('addToCartBtn');
  let backBtn = document.getElementById('backBtn');
  let swiperPagesWrapper = document.getElementById('swiperPagesWrapper');
  let wishlistBtn = document.getElementById('wishlistBtn');
  let titleText = document.getElementById('titleText');
  let descriptionText = document.getElementById('descriptionText');
  let sizeContainer = document.getElementById('sizeContainer');
  let colorContainer = document.getElementById('colorContainer');
  let quantityContainer = document.getElementById('quantityContainer');
  let quantityText = document.getElementById('quantity');
  let totalPriceText = document.getElementById('totalPrice');
  //initial Render!
  init();
  //select Rendered element
  let allSizeBtn = document.querySelectorAll('.size');
  let allColorBtn = document.querySelectorAll('.color');
  //initial cartObj
  initialCartObj();
  // Swiper Config:
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

  //functions
  function initialCartObj() {
    cartObj.title = data.title;
    cartObj.color = allColorBtn[0].dataset.color;
    cartObj.size = allSizeBtn[0].textContent.trim();
    cartObj.quantity = 1;
    cartObj.id = data.id;
    cartObj.images = data.images;
    cartObj.price = data.price;
  }
  function renderSlide(data, container) {
    container.innerHTML = '';
    data.forEach((item) => {
      let html = `
      <div class="swiper-slide">
        <img
          class="w-full h-full object-cover"
          src=${item}
          alt=""
        />
      </div>`;
      container.innerHTML += html;
    });
  }

  function renderSize(data, container) {
    container.innerHTML = '';
    data.forEach((item, i) => {
      if (i === 0) {
        let html = `          
      <div
      data-active="false"
      class="min-w-[40px] h-[40px] cursor-pointer size rounded-full   flex justify-center items-center font-semibold text-lg text-white bg-black"
      >
      ${item}
    </div>`;
        container.innerHTML += html;
      } else {
        let html = `          
        <div
        data-active="false"
        class="min-w-[40px] h-[40px] cursor-pointer size rounded-full border-2 border-gray-500 flex justify-center items-center font-semibold text-lg text-gray-500"
        >
        ${item}
      </div>`;
        container.innerHTML += html;
      }
    });
  }
  function renderColor(data, container) {
    function renderCircle(val, color, id) {
      if (color === 'green') {
        let html = `          
      <div
      data-color="${id}"
      class="min-w-[40px] h-[40px] cursor-pointer rounded-full flex justify-center items-center bg-green-500 color"
    >
    ${val}
          </div>`;
        return html;
      } else if (color === 'red') {
        let html = `          
      <div
      data-color="${id}"
      class="min-w-[40px] h-[40px] cursor-pointer rounded-full flex justify-center items-center bg-red-500 color"
    >
    ${val}
          </div>`;
        return html;
      } else if (color === 'blue') {
        let html = `          
      <div
      data-color="${id}"
      class="min-w-[40px] h-[40px] cursor-pointer rounded-full flex justify-center items-center bg-blue-500 color"
    >
    ${val}
          </div>`;
        return html;
      } else if (color === 'yellow') {
        let html = `          
      <div
      data-color="${id}"
      class="min-w-[40px] h-[40px] cursor-pointer rounded-full flex justify-center items-center bg-yellow-500 color"
    >
    ${val}
          </div>`;
        return html;
      }
    }

    container.innerHTML = '';
    data.forEach((item, i) => {
      console.log(i);
      if (i === 0) {
        let x = ` <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
<g id="SVGRepo_bgCarrier" stroke-width="0"/>
<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
<g id="SVGRepo_iconCarrier"> <g id="Interface / Check"> <path id="Vector" d="M6 12L10.2426 16.2426L18.727 7.75732" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g> </g>
          </svg>`;
        let html = renderCircle(x, item, item.split('-')[0]);
        container.innerHTML += html;
      } else {
        let html = renderCircle('', item, item.split('-')[0]);
        container.innerHTML += html;
      }
    });
  }
  function handleQuantity() {
    let quantity = 1;
    return function (action) {
      if (action === 'plus') {
        let num = ++quantity;
        cartObj.quantity = num;
        return num;
      }
      if (action === 'minus' && quantity > 1) {
        let num = --quantity;
        cartObj.quantity = num;
        return num;
      } else {
        cartObj.quantity = quantity;
        return quantity;
      }
    };
  }
  function renderWishlistBtn() {
    let isWishList = userData.wishlist.includes(data.id);
    if (isWishList) {
      wishlistBtn.innerHTML = toggleLike.like;
      wishlistBtn.dataset.wishlist = true;
    } else {
      wishlistBtn.innerHTML = toggleLike.noLike;
      wishlistBtn.dataset.wishlist = false;
    }
  }
  let quantity = handleQuantity();
  function handleTotalPrice(quantity) {
    let price = data.price * quantity;
    cartObj.totalPrice = price;
    return price;
  }
  function init() {
    renderSlide(data.images, swiperPagesWrapper);
    renderSize(data.size, sizeContainer);
    renderColor(data.color, colorContainer);
    renderWishlistBtn();
    descriptionText.textContent = data.description;
    titleText.textContent = data.title;
    totalPriceText.textContent = `${handleTotalPrice(1)}.00$`;
  }

  //EventListeners
  backBtn.addEventListener('click', () => {
    Router().navigate('/home');
  });

  sizeContainer.addEventListener('click', (e) => {
    let el = e.target.closest('.size');
    if (el) {
      allSizeBtn.forEach((btn) => {
        btn.dataset.active = false;
        btn.style.backgroundColor = 'white';
        btn.style.color = '#717171';
      });
      el.dataset.active = true;
      el.style.backgroundColor = 'black';
      el.style.color = 'white';
      cartObj.size = el.textContent.trim();
      console.log(cartObj);
    }
  });

  colorContainer.addEventListener('click', (e) => {
    let el = e.target.closest('.color');
    if (el) {
      allColorBtn.forEach((btn) => {
        btn.innerHTML = '';
      });
      el.innerHTML = `
      <svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
        <g id="SVGRepo_iconCarrier"> <g id="Interface / Check"> <path id="Vector" d="M6 12L10.2426 16.2426L18.727 7.75732" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </g> </g>
      </svg>`;
      cartObj.color = el.dataset.color;
      console.log(cartObj);
    }
  });

  quantityContainer.addEventListener('click', (e) => {
    let el = e.target.closest('button');
    if (el) {
      let id = el.id;
      quantityText.innerHTML = quantity(id);
      totalPriceText.textContent = `${handleTotalPrice(quantity())}.00$`;
      console.log(cartObj);
    }
  });

  addToCartBtn.addEventListener('click', () => {
    let productExist = [...userData.cart].find((item) => item.id == cartObj.id);
    console.log(productExist);
    if (!productExist) {
      patchUser(userId, { cart: [...userData.cart, cartObj] });
      Router().navigate('/cart');
    } else {
      Router().navigate('/cart');
    }
  });
  wishlistBtn.addEventListener('click', (e) => {
    let el = e.target.closest('button');
    let state = e.target.closest('button').dataset.wishlist;
    let id = localStorage.getItem('id');

    if (state === 'false') {
      el.innerHTML = toggleLike.like;
      el.dataset.wishlist = true;
      patchUser(userId, { wishlist: [data.id, ...userData.wishlist] });
    } else {
      el.innerHTML = toggleLike.noLike;
      el.dataset.wishlist = false;
      let newWishList = userData.wishlist.filter((item) => item !== data.id);
      console.log(newWishList);
      patchUser(userId, { wishlist: newWishList });
    }
  });
};
