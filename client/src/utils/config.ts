import http from 'http';
import https from 'https';
import qs from 'qs';
import { AxiosResponse, AxiosRequestConfig } from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: '/',
  transformResponse: [(data: AxiosResponse) => {
    return data;
  }],
  paramsSerializer(params: any) {
    return qs.stringify(params);
  },
  timeout: 30000,
  responseType: 'json',
  maxRedirects: 5,
  maxContentLength: 2000,
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgent: new https.Agent({ keepAlive: true }),
};

export default axiosConfig;
