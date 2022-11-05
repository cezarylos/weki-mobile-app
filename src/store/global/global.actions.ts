import { createAsyncThunk } from '@reduxjs/toolkit';

import { Slices } from '../../enums/slices';
import AuthService from '../../services/auth.service';

export const getUser = createAsyncThunk(`${Slices.GLOBAL}/getUser`, async (getCredentials: Function): Promise<any> => {
  try {
    const {
      idToken: id_token,
      accessToken: access_token,
      expiresIn: expires_in,
      tokenType: token_type
    } = await getCredentials();
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
  }
});
