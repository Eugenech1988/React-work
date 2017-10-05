import { combineReducers } from 'redux';
import defaultReducer from './defaultReducer';
import inputValueReducer from './inputValueReducer';
import resultReducer from './resultReducer';
import loaderReducer from './loaderReducer';


export default combineReducers({
  defaultReducer,
  loaderInit: loaderReducer,
  resultValue: resultReducer,
  inputValue: inputValueReducer
});
