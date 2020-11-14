import React, { useState } from 'react';

import { BaseInput } from './styles/BaseInput';

function Input(props) {
  const [number, setNumber] = useState();

  const handleNumberInput = ({ target }) => {
    const { value } = target;
    const resetValue = value === '' ? true : false;
    const inputValue = Number(value);

    if (resetValue) {
      return setNumber(value);
    }

    if (!inputValue) {
      return;
    }

    setNumber(inputValue);
  };

  return (
    <BaseInput
      {...props}
      value={number}
      onChange={handleNumberInput}  
    />
  );
}

export default Input;
