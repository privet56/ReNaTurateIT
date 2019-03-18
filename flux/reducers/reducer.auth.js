import { AUTH_DATA_CHANGE } from '../actions/types';

const initialState = {
  un: '',
  pwd: ''
};

const authDataReducer = (state = initialState, action) => {

  switch(action.type)
  {
    case AUTH_DATA_CHANGE:
      return {
        ...state,
        un: action.payload.un,
		    pwd: action.payload.pwd
      };
    default:
      return state;
  }
}

export default authDataReducer;

const getAuthDataChanged = state => state.un;
