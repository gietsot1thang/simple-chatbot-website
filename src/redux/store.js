import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from './reducer';

const middleware = applyMiddleware(thunk);
const devTool = composeWithDevTools({ name: 'FAQ BOT' });
const enhancer = process.env.NODE_ENV !== 'production'
  ? devTool(middleware)
  : middleware;

const store = createStore(reducer, {}, enhancer);

export default store;
