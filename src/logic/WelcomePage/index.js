import GetHtml from '../../services/instance/GetHtmlPage';

export const WelcomePage = async () => {
  const response = await GetHtml('welcome.html');
  document.body = response;
};
