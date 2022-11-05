import { API_URL } from '@env';

import axios, { AxiosPromise } from 'axios';

import { GetJwtTokenParamsInterface } from './auth.service.interface';

class AuthService {
  static getJwtToken(params: GetJwtTokenParamsInterface): AxiosPromise<{ jwt: string; user: any }> {
    return axios.get(`${API_URL}/api/auth/auth0/callback`, { params });
  }
}

export default AuthService;
