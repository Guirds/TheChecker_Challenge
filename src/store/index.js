import { createStore, compose, applyMiddleware } from 'redux';

import reducers from './reducers/index';

const middlewares = [];

middlewares.push();

const composer = process.env.NODE_ENV === 'development'
  ? compose(
    applyMiddleware(...middlewares),
    console.tron.createEnhancer(),
  )
  : compose(applyMiddleware(...middlewares));

const store = createStore(reducers, composer);

export default store;
