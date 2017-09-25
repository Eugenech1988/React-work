import {
  DEFAULT_CONST
}
  from '../constans/defaultConst';

const initialState = {

};

export default function defaultReducer( state = initialState, action ) {
  switch ( action.type ) {
    case DEFAULT_CONST:
      return state;

    default:
      return state;
  }
}
