import { Router } from '../../router';
import GetHtml from '../../services/instance/GetHtmlPage';

export const WelcomePage = async () => {
  //set request to get welcome page
  const welcome = await GetHtml('welcome.html');
  //assign new body
  document.body = welcome;

  setTimeout(async () => {
    //add slider to welcome page
    const slider = await GetHtml('welcomeSlider.html');
    document.body = slider;
    const slides = document.querySelectorAll('.slide');
    const SliderBtnContainer = document.getElementById('rectangleContainer');
    let currentSlide = 0;
    //functions

    const GoToSlide = (num = 0) => {
      slides.forEach((el, i) => {
        el.style.transform = `translateX(${(i - num) * 100}%)`;
      });
    };
    const sliderBtnGenerator = () => {
      slides.forEach((el, i) => {
        let btn = `<button class="w-[30px] h-[3px] bg-black" data-slide="${i}"></button>`;
        SliderBtnContainer.innerHTML += btn;
      });
    };
    const activeSlide = (slide) => {
      let allBtn = [...SliderBtnContainer.children];
      allBtn.forEach((el) => (el.style.opacity = '50%'));
      allBtn.find((item) => {
        if (item.dataset.slide === `${slide}`) item.style.opacity = '100%';
      });
    };
    sliderBtnGenerator();
    activeSlide(0);
    GoToSlide();
    let nextBtn = document.getElementById('nexSlide');
    nextBtn.addEventListener('click', () => {
      currentSlide++;
      if (currentSlide >= 3) {
        Router().navigate('/login');
      } else {
        GoToSlide(currentSlide);
        activeSlide(currentSlide);
      }
    });
  }, 3000);
};
