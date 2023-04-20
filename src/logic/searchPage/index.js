import GetHtml from '../../services/instance/GetHtmlPage';
import { debounce } from 'lodash';
import { globalSearch } from '../../services/apis/globalSearch';
import { renderCard } from '../RenderCard';
import { Router } from '../../router';
import { renderHistory, setHistory } from '../HandleHistory';
import { renderSearchCard } from '../RenderHistoryCart';

export const SearchPage = async () => {
  let searchBody = await GetHtml('search.html');
  document.body = searchBody;
  let searchContainer = document.getElementById('searchContainer');
  let cartWrapper = document.getElementById('cartWrapper');
  let backBtn = document.getElementById('back');
  //   console.log(searchContainer);
  searchContainer.children[1].addEventListener('focus', (e) => {
    let el = e.target.parentElement;
    el.style.border = '1px solid black';
  });
  searchContainer.children[1].addEventListener('blur', (e) => {
    let el = e.target.parentElement;
    el.style.border = '0px';
  });

  function handleSearch(data, container, val) {
    container.innerHTML = '';
    console.log(data);
    if (data.length && Boolean(data)) {
      renderSearchCard(data, container, val);
    } else {
      let img = document.createElement('img');
      img.setAttribute('src', './asset/png/notFound.png');
      img.className = 'w-3/4 object-cover';
      let p1 = document.createElement('p');
      p1.className = 'font-medium';
      p1.append('not Found!');
      p1.classList.add('font-bold');
      p1.classList.add('text-2xl');
      let p2 = document.createElement('p');
      p2.append(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
      perferendis sint ipsam eaque nemo ad eligendi quae tempore. Commodi, autem?`);
      p2.className = 'text-center';
      container.append(img, p1, p2);
    }
  }

  searchContainer.children[1].addEventListener(
    'keydown',
    debounce(async (e) => {
      if (e.target.value === '') {
        console.log('hello');
        renderHistory(cartWrapper);
      } else {
        let data = await globalSearch(e.target.value);
        handleSearch(data, cartWrapper, e.target.value);
        setHistory(e.target.value.trim());
      }
    }, 700)
  );
  backBtn.addEventListener('click', () => {
    Router().navigate('/home');
  });

  renderHistory(cartWrapper);
};
