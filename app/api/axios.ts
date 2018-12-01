import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

const baseURL = process.env.API_BASE_URL as string;
const isDummy = baseURL === undefined && process.env.NODE_ENV !== 'production';

export const dummyResponseConfig = (
  dummyResponse: () => AxiosResponse,
  sleep?: number,
) => {
  if (!isDummy) {
    return undefined;
  }
  const { adapter, ...rest } = axios.defaults;
  const config: AxiosRequestConfig = {
    adapter: customAdapter(dummyResponse, sleep),
    ...rest,
  };
  return config;
};

function customAdapter(dummyResponse: () => AxiosResponse, sleep?: number) {
  return config => {
    return new Promise<AxiosResponse>((resolve, reject) => {
      if (sleep) {
        delay(sleep).then(() => {
          resolve(dummyResponse());
        });
      } else {
        resolve(dummyResponse());
      }
    });
  };
}
const delay = t => new Promise(resolve => setTimeout(resolve, t));

export default axios.create({
  baseURL: baseURL,
  // timeout: 1000,
});
