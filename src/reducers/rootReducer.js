import { combineReducers } from 'redux';
import defaultReducer from './defaultReducer';
import inputValueReducer from './inputValueReducer';
import resultReducer from './resultReducer';


export default combineReducers({
  defaultReducer,
  resultValue: resultReducer,
  inputValue: inputValueReducer
});
