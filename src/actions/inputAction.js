import {
  GET_INPUT_VALUE
}
  from '../constans/inputConst';

const inputAction = (inputValue) => {
  return (dispatch) => {
    dispatch({
      inputValue: inputValue,
      type: GET_INPUT_VALUE
    });
  };
};

export default inputAction;
