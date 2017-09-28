import {
  DEFAULT_CONST
}
  from '../constants/defaultConst';

export function nameFunc(payload) {
  return (dispatch) => {
    dispatch({
      type: DEFAULT_CONST
    });
  };
}
