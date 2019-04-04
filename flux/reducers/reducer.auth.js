import { AUTH_LOGIN, AUTH_DATA_CHANGE } from '../actions/types';

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

      if(action.payload.error) {//'error' returned by redux-promise in case of io error
        return {
          ...state,
          jwt: null,
          errorMsg: action.payload.result,
        };
      }

      return {
        ...state,
        jwt: action.payload.result.jwt ? action.payload.result.jwt : null,
        errorMsg: action.payload.result.errorMsg ? action.payload.result.errorMsg : null,
      };
  default:
      return state;
  }
}

export default authDataReducer;
