import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../reducers/rootReducer';

const loggerMiddleware = createLogger();

export default function configureStore() {
  return createStore(
    reducer,
    composeWithDevTools(
      applyMiddleware(
        loggerMiddleware
      )
    )
  );
}