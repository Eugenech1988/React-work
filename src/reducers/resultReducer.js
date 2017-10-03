import {
  CREATE_TABLE_FROM_RESULT
}
  from '../constans/resultConst';

const initialState = '';

export default function resultValueReducer( state = initialState, action ) {
  switch ( action.type ) {
    case CREATE_TABLE_FROM_RESULT:
      return action.resultValue;
    default:
      return state;
  }
}
