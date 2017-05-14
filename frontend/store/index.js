import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import { routerReducer } from 'react-router-redux';
import reducers from '../reducers';
import { middleware } from '../router';

const middlewares = [middleware];

if (process.env.NODE_ENV === 'development') {
  const logger = createLogger({
    collapsed: true,
    diff: true,
  });
  middlewares.push(logger);
}

const store = createStore(
  combineReducers(Object.assign({
    router: routerReducer,
  }, reducers)),
  applyMiddleware(...middlewares),
);

export default store;
