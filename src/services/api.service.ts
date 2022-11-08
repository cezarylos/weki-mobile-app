import { API_URL } from '@env';

import axios from 'axios';

import store from '../store/store';

export const apiInstance = axios.create({
  baseURL: `${API_URL}/api`
});

apiInstance.interceptors.request.use(
  async config => {
    const jwt = store.getState().global.jwt;
    config.headers = {
      authorization: jwt ? `Bearer ${jwt}` : null
    };
    return config;
  },
  error => {
    Promise.reject(error);
  }
);
