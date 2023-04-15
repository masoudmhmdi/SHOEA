import { userExist } from '../../services/apis/userExist';
import GetHtml from '../../services/instance/GetHtmlPage';
import { Router } from '../../router';

export const LoginPage = async () => {
  //get HTML page and assign to document
  const loginBody = await GetHtml('Login.html');
  document.body = loginBody;
  //get elements from  DOM
  let form = document.getElementById('loginForm');
  let inputs = form.querySelectorAll('.input');
  let formBtn = document.getElementById('formBtn');
  let emailSvg = document.getElementById('emailPath');
  let showSvg = document.getElementById('showPath');
  let lockSvg = document.getElementById('lockPath');
  let showSvgContainer = document.getElementById('showSvgContainer');
  let toastWarning = document.getElementById('toast-warning');
  console.log(formBtn);
  //svg toggle
  let svgToggle = {
    show: `<svg width="16px" height="16px" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000">

    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
    
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
    
    <g id="SVGRepo_iconCarrier"> <path d="M0 0h48v48H0z" fill="none"/> <g id="Shopicon"> <circle cx="24" cy="24" r="4"/> <path d="M24,38c12,0,20-14,20-14s-8-14-20-14S4,24,4,24S12,38,24,38z M24,16c4.418,0,8,3.582,8,8s-3.582,8-8,8s-8-3.582-8-8 S19.582,16,24,16z"/> </g> </g>
    
    </svg>`,
    hide: ` <svg
    width="14"
    height="15"
    viewBox="0 0 14 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="fill-black"
      d="M9.44125 11.798L8.029 10.3849C7.48286 10.5801 6.8925 10.6163 6.32662 10.4891C5.76073 10.362 5.24259 10.0768 4.83247 9.66666C4.42235 9.25654 4.13712 8.73839 4.00998 8.17251C3.88283 7.60662 3.91899 7.01626 4.11425 6.47012L2.31175 4.66762C0.82075 5.99325 0 7.5 0 7.5C0 7.5 2.625 12.3125 7 12.3125C7.84035 12.3096 8.6712 12.1345 9.44125 11.798ZM4.55875 3.202C5.3288 2.8655 6.15964 2.69039 7 2.6875C11.375 2.6875 14 7.5 14 7.5C14 7.5 13.1784 9.00588 11.6891 10.3333L9.88488 8.529C10.0801 7.98286 10.1163 7.3925 9.98915 6.82662C9.862 6.26073 9.57678 5.74258 9.16666 5.33247C8.75654 4.92235 8.23839 4.63712 7.67251 4.50998C7.10662 4.38283 6.51626 4.41899 5.97013 4.61425L4.55875 3.20288V3.202Z"
      fill="#6C757D"
    />
    <path
      d="M4.83457 7.19022C4.78644 7.52649 4.81728 7.86935 4.92466 8.19163C5.03204 8.51391 5.213 8.80676 5.4532 9.04696C5.69341 9.28716 5.98625 9.46812 6.30853 9.5755C6.63081 9.68288 6.97367 9.71373 7.30994 9.6656L4.83369 7.19022H4.83457ZM9.16582 7.80972L6.69044 5.33347C7.02672 5.28534 7.36958 5.31618 7.69186 5.42356C8.01414 5.53094 8.30698 5.7119 8.54719 5.95211C8.78739 6.19231 8.96835 6.48515 9.07573 6.80743C9.18311 7.12971 9.21395 7.47257 9.16582 7.80885V7.80972Z"
      fill="#6C757D"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M11.9407 13.0598L1.44067 2.55981L2.06017 1.94031L12.5602 12.4403L11.9407 13.0598Z"
      fill="#6C757D"
    />
  </svg>`,
  };
  //functions
  const showToast = () => {
    toastWarning.classList.replace('translate-y-[-80px]', 'translate-y-[0px]');
  };
  const hideToast = () => {
    toastWarning.classList.replace('translate-y-[0px]', 'translate-y-[-80px]');
  };
  //Event listeners
  inputs.forEach((input) => {
    let target = input.parentElement;
    input.addEventListener('focus', () => {
      target.style.border = '2px solid black';
      target.style.borderRadius = '0px';
    });
    input.addEventListener('blur', () => {
      target.style.border = '0px solid black';
      target.style.borderRadius = '4px';
    });
  });
  inputs[0].addEventListener('keydown', function x() {
    console.log('event run');
    formBtn.style.opacity = '100%';
    emailSvg.classList.add('fill-black');
    inputs[0].removeEventListener('keydown', x);
  });
  inputs[1].addEventListener('keydown', function y() {
    formBtn.style.opacity = '100%';
    lockSvg.classList.add('fill-black');
    showSvg.classList.add('fill-black');
    inputs[1].removeEventListener('keydown', y);
  });
  //svg toggle show and hide in password
  showSvgContainer.addEventListener('click', (e) => {
    let svgContainer = e.target;
    let passwordInput = e.currentTarget.parentElement.querySelector('input');
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
      svgContainer.innerHTML = svgToggle.show;
    } else {
      passwordInput.type = 'password';
      svgContainer.innerHTML = svgToggle.hide;
    }
  });
  //form auth
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    let emailVal = inputs[0].value;
    let passwordVal = inputs[1].value;
    let hooAmI = await userExist(emailVal);
    if (hooAmI.length) {
      if (hooAmI[0].password === passwordVal) {
        console.log(hooAmI);
        localStorage.setItem('id', hooAmI[0].id);
        Router().navigate('/home');
      } else {
        showToast();
        setTimeout(hideToast, 1000);
      }
    } else {
      showToast();
      setTimeout(hideToast, 1000);
    }
  });
};
