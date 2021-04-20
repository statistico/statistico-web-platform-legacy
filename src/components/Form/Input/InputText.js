import React from 'react';
import { func, string } from 'prop-types';

import InputWrapper from './InputWrapper';

const InputText = (props) => {
  const { onChange, placeholder } = props;

  return (
    <InputWrapper
      placeholder={placeholder}
      type="text"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

InputText.propTypes = {
  onChange: func.isRequired,
  placeholder: string.isRequired,
};

export default InputText;
