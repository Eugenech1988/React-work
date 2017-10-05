import {
  LOADER_TOGGLE
}
  from '../constans/loaderConst';

const loaderToggle = (loaderInit) => {
  return (dispatch) => {
    dispatch({
      loaderInit,
      type: LOADER_TOGGLE
    });
  };
};

export default loaderToggle;
