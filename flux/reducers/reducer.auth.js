import { AUTH_LOGIN, AUTH_DATA_CHANGE } from '../actions/types';
import { jsxOpeningElement } from '@babel/types';

const initialState = {
  un: '',
  pwd: '',
  errorMsg: null,
  jwt: undefined
};

const authDataReducer = (state = initialState, action) => {

  switch(action.type)
  {
    case AUTH_DATA_CHANGE:
      return {
        ...state,
        un: action.payload.un,
        pwd: action.payload.pwd,
        errorMsg: action.payload.errorMsg,
        jwt: action.payload.jwt
      };
    case AUTH_LOGIN:
      console.log("reducer:"+JSON.stringify(action.payload));
      return {
        ...state,
        jwt: action.payload.jwt ? action.payload.jwt : null,
        errorMsg: action.payload.errorMsg ? action.payload.errorMsg : null,
      };
  default:
      return state;
  }
}

export default authDataReducer;
