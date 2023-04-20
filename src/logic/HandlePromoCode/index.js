export const handlePromoCode = (code, container) => {
  //   code = 'Gold';
  //   container.innerHTML = '';
  console.log(code);
  if (code === 'Gold') {
    container.innerHTML = `
    <div
        class=" bg-black rounded-30  flex gap-2  justify-between items-center py-1 px-4"
    >
        <span class="text-white text-lg font-semibold">Discount 30% off</span>

        <button class=" text-white">
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
    container.nextElementSibling.textContent = '';
  } else if (code === 'Silver') {
  } else if (code === 'Bronze') {
  } else {
    container.innerHTML = `        <input
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
    container.nextElementSibling.textContent = 'Code is Wrong';
    let addPromoBtn = document.getElementById('addPromo');
    addPromoBtn.addEventListener('click', (e) => {
      let promoCode = e.target.closest('button').previousElementSibling?.value;
      handlePromoCode(promoCode, promoContainer);
    });
  }
};
