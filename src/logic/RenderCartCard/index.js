export const RenderCartCard = (data, container) => {
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
        <button class="deleteBtn">
          <svg
            class="w-6 h-6"
            viewBox="0 0 24 24"
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
                d="M10 12V17"
                stroke="#000000"
                stroke-width="1.104"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14 12V17"
                stroke="#000000"
                stroke-width="1.104"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 7H20"
                stroke="#000000"
                stroke-width="1.104"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10"
                stroke="#000000"
                stroke-width="1.104"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z"
                stroke="#000000"
                stroke-width="1.104"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </button>
      </div>
      <div
        class="w-full pt-2 flex justify-start items-center gap-1 text-xs opacity-70 font-semibold"
      >
        <div class="flex gap-1 items-center">
          <div class="w-4 h-4 bg-red-300 rounded-full"></div>
          <span>${cart.color}</span>
        </div>
        <span>|</span>
        <span>size=${cart.size}{</span>
      </div>
      <div class="flex justify-between items-center pt-3 mt-auto">
        <h3 class="font-semibold total">$${cart.totalPrice}</h3>
        <div
          class="w-1/2 h-8 rounded-25 bg-primary flex justify-around items-center"
        >
          <button id="minus">
            <svg
              class="w-4 h-10"
              width="64px"
              height="64px"
              viewBox="0 0 24 24"
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
                  fill="#000000"
                />
              </g>
            </svg>
          </button>
          <span id="quantity" class="text-xs">${cart.quantity}</span>
          <button id="plus">
            <svg
              class="w-4 h-10"
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
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12 4C12.5523 4 13 4.44772 13 5V11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H13V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H11V5C11 4.44772 11.4477 4 12 4Z"
                  fill="#000000"
                />
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>`;
    container.innerHTML += html;
  });
};
