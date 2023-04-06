import GetHtml from '../../services/instance/GetHtmlPage';
export const StarterPage = async () => {
  const response = await GetHtml('Home.html');
  document.body = response;
};
