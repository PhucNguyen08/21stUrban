import { useReducer } from 'react';

const inputReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT':
      return {
        ...state,
        value: action.value,
      };
    case 'BLUR':
      return {
        ...state,
        isTouched: true,
      };
    case 'RESET':
      return {
        value: '',
        isTouched: false,
      };
  }
};

const initialInput = {
  value: '',
  isTouched: false,
};

function UseInput(validateInput) {
  const [inputState, dispatch] = useReducer(inputReducer, initialInput);

  const valueIsValid = validateInput(inputState.value);

  const hasError = !valueIsValid && inputState.isTouched;

  const handleChangeInput = e => {
    dispatch({ type: 'INPUT', value: e.target.value });
  };

  const handleBlurInput = () => {
    dispatch({ type: 'BLUR' });
  };

  const handleResetInput = () => {
    dispatch({ type: 'RESET' });
  };

  return {
    isValid: valueIsValid,
    valueInput: inputState.value,
    error: hasError,
    handleChangeInput: handleChangeInput,
    handleBlurInput: handleBlurInput,
    handleResetInput: handleResetInput,
  };
}

export default UseInput;
