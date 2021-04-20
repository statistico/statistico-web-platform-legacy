import React from 'react';
import { func, number, string } from 'prop-types';

import InputWrapper from './InputWrapper';

const InputNumber = (props) => {
  const { onChange, placeholder, step } = props;

  return (
    <InputWrapper
      placeholder={placeholder}
      type="number"
      onChange={(e) => onChange(e.target.value)}
      step={step}
    />
  );
};

InputNumber.propTypes = {
  onChange: func.isRequired,
  placeholder: string.isRequired,
  step: number.isRequired,
};

export default InputNumber;
