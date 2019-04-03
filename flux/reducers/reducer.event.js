import { EVENT_CREATE, EVENT_CREATE_SUCCESS, EVENT_CREATE_ERROR } from '../actions/types';

const initialState = {
  event: null,
  errorMsg: undefined,   //undefined: backend not yet called, null: no errors after calling backend, string: errorMsg returned by backend
  infoMsg: undefined,
  accessingServer: false
};

const eventDataReducer = (state = initialState, action) => {

  switch(action.type)
  {
    case EVENT_CREATE:
      return {
        ...state, accessingServer: true, errorMsg: undefined, infoMsg: undefined
      };
      case EVENT_CREATE_SUCCESS:
      return {
        ...state, accessingServer: false, infoMsg: action.payload, errorMsg: null
      };
      case EVENT_CREATE_ERROR:
      return {
        ...state, accessingServer: false, errorMsg: action.payload, infoMsg: null
      };

  default:
      return state;
  }
}

export default eventDataReducer;
