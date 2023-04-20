import { Router } from '../../router';
import GetHtml from '../../services/instance/GetHtmlPage';

export const Payment = async () => {
  let paymentBody = await GetHtml('payment.html');
  document.body = paymentBody;

  let confirmPaymentBtn = document.getElementById('confirmPayment');
  let modal = document.getElementById('modal');
  let viewOrderBtn = document.getElementById('viewOrder');
  let overlay = document.getElementById('overlay');

  confirmPaymentBtn.addEventListener('click', () => {
    modal.style.transform = 'translate(-50%,-50%)';
    overlay.style.display = 'block';
  });

  viewOrderBtn.addEventListener('click', () => {
    Router().navigate('/orders');
  });
};
