import { AUTH_DATA_CHANGE } from './types';

export const setAuthData = authData => {
  return {
    type: AUTH_DATA_CHANGE,
    payload: authData
  }
}
