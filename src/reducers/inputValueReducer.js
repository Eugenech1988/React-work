import {
  GET_INPUT_VALUE
}
  from '../constans/inputConst';

const initialState = '';

export default function inputValueReducer( state = initialState, action ) {
  switch ( action.type ) {
    case GET_INPUT_VALUE:
      return action.inputValue;
    default:
      return state;
  }
}
