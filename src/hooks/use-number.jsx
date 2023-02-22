import { useReducer } from 'react';

const numberReducer = (state, action) => {
  switch (action.type) {
    case 'DICRE':
      if (state.quantity === 1) {
        return {
          ...initialNumber,
        };
      }
      return {
        quantity: state.quantity - 1,
      };
    case 'INCRE':
      return {
        quantity: state.quantity + 1,
      };
    case 'INPUT':
      if (Number(action.value) === 0) {
        return {
          ...initialNumber,
        };
      }
      return {
        quantity: action.value,
      };
  }
};

const initialNumber = {
  quantity: 1,
};

export default function UseNumber() {
  const [quantityProduct, dispatch] = useReducer(numberReducer, initialNumber);

  const handleDescProduct = () => {
    dispatch({ type: 'DICRE' });
  };

  const handleIncreProduct = () => {
    dispatch({ type: 'INCRE' });
  };

  const handleInputProduct = e => {
    dispatch({ type: 'INPUT', value: e.target.value });
  };

  return {
    quantity: quantityProduct.quantity,
    handleMinusProduct: handleDescProduct,
    handlePlusProduct: handleIncreProduct,
    handleQuantityInput: handleInputProduct,
  };
}
