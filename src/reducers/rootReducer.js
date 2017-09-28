import { combineReducers } from 'redux';
import defaultReducer from './defaultReducer';
import inputValueReducer from './inputValueReducer';


export default combineReducers({
  defaultReducer,
  inputValue: inputValueReducer
});
