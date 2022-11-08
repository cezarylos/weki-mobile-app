import { AxiosPromise } from 'axios';

import { UserInterface } from '../interfaces/user.interface';
import { apiInstance } from './api.service';
import { GetJwtTokenParamsInterface } from './auth.service.interface';

class AuthService {
  static getJwtToken(params: GetJwtTokenParamsInterface): AxiosPromise<{ jwt: string; user: UserInterface }> {
    return apiInstance.get('/auth/auth0/callback', { params });
  }

  static getUsers(): AxiosPromise {
    return apiInstance.get('/users');
  }
}

export default AuthService;
