import React from 'react';
import Select from 'react-select';
import { arrayOf, func, shape, string } from 'prop-types';

import MultiFilterWrapper from './MultiFilterWrapper';

const MultiFilter = (props) => {
  const { selection, selections, styles, title, toggleSelection } = props;

  const allOption = {
    label: 'Select all',
    value: '*',
  };

  const options = selections.map((s) => {
    return {
      value: s.name,
      label: s.label,
    };
  });

  const onChangeInput = (input) => {
    if (input.length > 0 && input[input.length - 1].value === allOption.value) {
      return toggleSelection(options);
    }

    return toggleSelection(input);
  };

  return (
    <MultiFilterWrapper>
      <p>{title}:</p>
      <Select
        options={[allOption, ...options]}
        isMulti
        value={selection}
        onChange={onChangeInput}
        styles={styles}
        placeholder={null}
        searchable
      />
    </MultiFilterWrapper>
  );
};

MultiFilter.propTypes = {
  selection: arrayOf(
    shape({
      value: string.isRequired,
      label: string.isRequired,
    })
  ),
  selections: arrayOf(
    shape({
      name: string.isRequired,
      label: string.isRequired,
    })
  ).isRequired,
  styles: shape({
    container: func.isRequired,
    valueContainer: func.isRequired,
    control: func.isRequired,
  }).isRequired,
  title: string.isRequired,
  toggleSelection: func.isRequired,
};

MultiFilter.defaultProps = {
  selection: [],
};

export default MultiFilter;
