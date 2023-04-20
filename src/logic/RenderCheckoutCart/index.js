export const RenderCheckoutCart = (data, container) => {
  function renderCircle(val, color, id) {
    if (color === 'green') {
      let html = `          
    <div
    data-color="${id}"
    class="min-w-[20px] h-[20px] cursor-pointer rounded-full flex justify-center items-center bg-green-500 color"
  >
  ${val}
        </div>`;
      return html;
    } else if (color === 'red') {
      let html = `          
    <div
    data-color="${id}"
    class="min-w-[20px] h-[20px] cursor-pointer rounded-full flex justify-center items-center bg-red-500 color"
  >
  ${val}
        </div>`;
      return html;
    } else if (color === 'blue') {
      let html = `          
    <div
    data-color="${id}"
    class="min-w-[20px] h-[20px] cursor-pointer rounded-full flex justify-center items-center bg-blue-500 color"
  >
  ${val}
        </div>`;
      return html;
    } else if (color === 'yellow') {
      let html = `          
    <div
    data-color="${id}"
    class="min-w-[20px] h-[20px] cursor-pointer rounded-full flex justify-center items-center bg-yellow-500 color"
  >
  ${val}
        </div>`;
      return html;
    }
  }
  container.innerHTML = '';
  data.forEach((cart) => {
    let html = `    <div
      data-id="${cart.id}"
      class="w-full h-40 sm:h-full p-6 flex justify-center lg:h-[300px] gap-1 bg-white shadow shadow-primary rounded-30 card"
    >
      <img
        class="w-2/5 h-full rounded-2xl object-cover"
        src="${cart.images[0]}"
        alt=""
      />
      <div class="w-3/5 flex flex-col pl-4">
        <div class="w-full flex">
          <h3 class="text-xl font-semibold flex-1 truncate">
          ${cart.title}
          </h3>
        </div>
        <div
          class="w-full pt-2 flex justify-start items-center gap-1 text-xs opacity-70 font-semibold"
        >
          <div class="flex gap-1 items-center">
            ${renderCircle('', cart.color, '')}
            <span>${cart.color}</span>
          </div>
          <span>|</span>
          <span>size=${cart.size}</span>
        </div>
        <div class="flex justify-between items-center pt-3 mt-auto">
          <h3 class="font-semibold total">$${cart.totalPrice}</h3>
          <div
            class="w-10 h-10 rounded-full font-bold tex-2xl bg-primary flex justify-around items-center"
          >
            <span id="quantity" class="text-xs">${cart.quantity}</span>
          </div>
        </div>
      </div>
    </div>`;
    container.innerHTML += html;
  });
};
