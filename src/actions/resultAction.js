import {
  CREATE_TABLE_FROM_RESULT
}
  from '../constans/resultConst';

const resultAction = (resultValue) => {
  return (dispatch) => {
    dispatch({
      resultValue: resultValue,
      type: CREATE_TABLE_FROM_RESULT
    });
  };
};

export default resultAction;
