import { Router } from '../../router';

export const renderCard = (dataArr, container) => {
  function goToSingleProduct(e) {
    let id = e.target.closest('.card').id;
    Router().navigate(`/product/${id}`);
  }
  window.goToSingleProduct = goToSingleProduct;
  container.innerHTML = '';
  dataArr.forEach((item) => {
    let html = `<div onclick="goToSingleProduct(event)" class="w-[182px] h-[244px] flex flex-col gap-1 card" id="${item.id}">
        <div
          class="w-full h-[182px] rounded-25 bg-primary flex justify-center items-center overflow-hidden "
        >
          <img
            class="w-full h-full object-cover"
            src="${item.images[0]}"
          />
        </div>
        <h3 class="text-[20px] font-bold mt-3">${item.title}</h3>
        <h4 class="text-[16px] font-semibold">${item.price}$</h4>
      </div>`;
    container.innerHTML += html;
  });
};
