import {
  LOADER_TOGGLE
}
  from '../constans/loaderConst';

const initialState = false;

export default function loaderInit( state = initialState, action ) {
  switch ( action.type ) {
    case LOADER_TOGGLE:
      return action.loaderInit;
    default:
      return state;
  }
}
