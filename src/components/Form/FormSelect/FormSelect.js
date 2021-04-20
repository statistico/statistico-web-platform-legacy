import React from 'react';
import {
  arrayOf,
  func,
  instanceOf,
  oneOfType,
  shape,
  string,
} from 'prop-types';

import Select from 'react-select';

import FormSelectWrapper from './FormSelectWrapper';
import selectStyles from '../../../config/form-styles';

const FormSelect = (props) => {
  const { placeholder, selection, selections, title, toggleSelection } = props;

  const options = selections.map((s) => {
    return {
      value: s.name,
      label: s.label,
    };
  });

  const onChangeInput = (input) => {
    if (input === null) {
      toggleSelection(null);
      return;
    }

    const i = selections.find((s) => s.label === input.label);
    toggleSelection(i);
  };

  const defaultValue = () => {
    if (selection == null) {
      return null;
    }

    return {
      value: selection.name,
      label: selection.label,
    };
  };

  return (
    <FormSelectWrapper>
      <p>{title}</p>
      <Select
        options={options}
        value={defaultValue()}
        onChange={onChangeInput}
        styles={selectStyles}
        placeholder={placeholder}
        isClearable
      />
    </FormSelectWrapper>
  );
};

FormSelect.propTypes = {
  placeholder: oneOfType([string, instanceOf(null)]),
  selection: oneOfType([
    shape({
      name: string.isRequired,
      label: string.isRequired,
    }).isRequired,
    instanceOf(null),
  ]),
  selections: arrayOf(
    shape({
      name: string.isRequired,
      label: string.isRequired,
    })
  ).isRequired,
  title: oneOfType([string, instanceOf(null)]),
  toggleSelection: func.isRequired,
};

FormSelect.defaultProps = {
  placeholder: null,
  selection: null,
  title: null,
};

export default FormSelect;
