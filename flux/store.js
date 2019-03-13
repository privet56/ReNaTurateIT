import { createStore, combineReducers } from 'redux';
import authDataReducer from './reducers/reducer.auth';

const rootReducer = combineReducers({
  auth: authDataReducer
});

const configureStore = () => {
  return createStore(rootReducer);
}

export default configureStore;
