import { createAsyncThunk } from '@reduxjs/toolkit';

import { Slices } from '../../enums/slices';
import { UserInterface } from '../../interfaces/user.interface';
import AuthService from '../../services/auth.service';

export const getUser = createAsyncThunk(
  `${Slices.GLOBAL}/getUser`,
  async (getCredentials: Function): Promise<{ jwt: string; user: UserInterface } | void> => {
    try {
      const credentials = await getCredentials();
      if (!credentials) {
        return;
      }
      const {
        idToken: id_token,
        accessToken: access_token,
        expiresIn: expires_in,
        tokenType: token_type
      } = credentials;
      const {
        data: { jwt, user }
      } = await AuthService.getJwtToken({
        id_token,
        access_token,
        expires_in,
        token_type
      });
      return {
        jwt,
        user
      };
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
);
