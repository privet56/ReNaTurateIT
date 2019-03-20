import { SETTINGS_DATA_CHANGE } from '../actions/types';

const initialState = {
  region: null,
  areaOfInterest: null,
  timeWindow: null,
  errorMsg: undefined   //undefined: backend not yet called, null: no errors after calling backend, string: errorMsg returned by backend
};

const settingsDataReducer = (state = initialState, action) => {

  switch(action.type)
  {
    case SETTINGS_DATA_CHANGE:
      return {
        ...state, ...action.payload
      };
  default:
      return state;
  }
}

export default settingsDataReducer;
