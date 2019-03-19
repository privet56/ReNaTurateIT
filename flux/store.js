import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import initSubscriber from 'redux-subscriber';

import authDataReducer from './reducers/reducer.auth';

const logger = createLogger();
const middleWare = global.__DEV__ ? [/*logger, */promiseMiddleware] : [promiseMiddleware];

const rootReducer = combineReducers({
  auth: authDataReducer
});

const configureStore = () => {
  return createStore(rootReducer, {}/*initial-state*/, applyMiddleware(...middleWare));
}

//export default configureStore;
const store = configureStore();
const subscribe = initSubscriber(store);
export default store;
