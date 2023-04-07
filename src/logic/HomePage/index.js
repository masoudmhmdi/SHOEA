import GetHtml from '../../services/instance/GetHtmlPage';

export const HomePage = async () => {
  const homeBody = await GetHtml('Home.html');
  console.log(homeBody);
  document.body = homeBody;
};
