import axios from 'axios';

const GetHtml = axios.create({
  baseURL: 'http://localhost:5173/src/pages',
});

GetHtml.interceptors.response.use((res) => {
  let dom = new DOMParser();
  let body = dom.parseFromString(res.data, 'text/html').body;
  return body;
});

export default GetHtml;
