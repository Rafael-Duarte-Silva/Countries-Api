import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const axiosiInstance = axios.create({
  baseURL: 'https://restcountries.com/v3.1/'
});

const api = (axios: AxiosInstance) => {
  return {
    get: function <T>(url: string, config: AxiosRequestConfig = {}) {
      return axios.get<T>(url, config);
    }
  };
};

export default api(axiosiInstance);