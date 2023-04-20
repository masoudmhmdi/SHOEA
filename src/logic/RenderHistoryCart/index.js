import { Router } from '../../router';

export const renderSearchCard = (dataArr, container, val) => {
  function goToSingleProduct(e) {
    let id = e.target.closest('.card').id;
    Router().navigate(`/product/${id}`);
  }
  window.goToSingleProduct = goToSingleProduct;
  container.innerHTML = '';
  container.innerHTML = `    <div class="w-full flex justify-between items-center">
  <span class="text-xl font-semibold">Result for "${val}"</span>
  <span class="font-semibold">${dataArr.length} Found</span>
</div>`;
  dataArr.forEach((item) => {
    let html = `<div onclick="goToSingleProduct(event)" class="w-[182px] h-[244px] max-[436px]:w-full flex flex-col gap-1 card" id="${item.id}">
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
