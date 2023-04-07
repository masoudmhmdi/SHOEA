import { Router } from '../../router';
import GetHtml from '../../services/instance/GetHtmlPage';

export const WelcomePage = async () => {
  //set request to get welcome page
  const welcome = await GetHtml('welcome.html');
  //assign new body
  document.body = welcome;

  setTimeout(async () => {
    const slider = await GetHtml('welcomeSlider.html');
    document.body = slider;
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const GoToSlide = (num = 0) => {
      slides.forEach((el, i) => {
        el.style.transform = `translateX(${(i - num) * 100}%)`;
      });
    };
    GoToSlide();
    let nextBtn = document.getElementById('nexSlide');
    nextBtn.addEventListener('click', () => {
      currentSlide++;
      if (currentSlide === 3) {
        console.log('go to login page');
      } else {
        GoToSlide(currentSlide);
      }
    });
  }, 3000);
};
