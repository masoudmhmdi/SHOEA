export const setHistory = (history) => {
  let oldHistory = JSON.parse(localStorage.getItem('history')) || [];

  localStorage.setItem(
    'history',
    JSON.stringify([...oldHistory, { title: history, id: Date.now() }])
  );
};

export const renderHistory = (container) => {
  let oldHistory = JSON.parse(localStorage.getItem('history')) || [];

  function renderItems(input) {
    let all = '';
    input.forEach((i) => {
      let items = `<div  class="flex justify-between items-center gap-4 ">
      <span class="flex-1 truncate opacity-80 font-normal"
        >${i.title}</span
      >
      <button id=${i.id} class="opacity-80 font-normal delete">
        <svg
          width="30px"
          height="30px"
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
              d="M9.16998 14.83L14.83 9.17004"
              stroke="#757575"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.83 14.83L9.16998 9.17004"
              stroke="#757575"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
              stroke="#757575"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
      </button>
    </div>`;
      all += items;
    });
    return all;
  }
  let html = `
  <div class="w-full flex justify-between items-center border-b py-4">
  <span class="text-xl font-semibold">Recent</span>
  <button id="clearAll" class="font-semibold">Clear All</button>
</div>
<div class="w-full flex flex-col gap-4">
  ${renderItems(oldHistory.reverse())}
</div>
  
  `;
  container.innerHTML = html;
  let clearAllBtn = document.getElementById('clearAll');
  clearAllBtn.addEventListener('click', () => {
    localStorage.setItem('history', JSON.stringify([]));
    renderHistory(container);
  });

  container.addEventListener('click', (e) => {
    let isDeleteBtn = e.target.closest('.delete');
    if (isDeleteBtn) {
      let id = +isDeleteBtn.id;
      console.log(id, oldHistory);
      let newData = oldHistory.filter((i) => i.id !== id);
      localStorage.setItem('history', JSON.stringify(newData));
      renderHistory(container);
    }
  });
};
