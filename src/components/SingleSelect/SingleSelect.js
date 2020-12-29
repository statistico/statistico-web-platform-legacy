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

const SingleSelect = (props) => {
  const { selections, selection, styles, toggleSelection } = props;

  const options = selections.map((s) => {
    return {
      value: s.name,
      label: s.label,
    };
  });

  const onChangeInput = (value) => {
    const m = selections.find((market) => market.name === value.value);
    toggleSelection(m);
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
    <Select
      options={options}
      defaultValue={defaultValue()}
      onChange={onChangeInput}
      styles={styles}
      placeholder={null}
    />
  );
};

SingleSelect.propTypes = {
  selections: arrayOf(
    shape({
      name: string.isRequired,
      label: string.isRequired,
    })
  ).isRequired,
  selection: oneOfType([
    shape({
      name: string.isRequired,
      label: string.isRequired,
    }).isRequired,
    instanceOf(null),
  ]),
  styles: shape({
    container: func,
    singleValue: func,
    valueContainer: func,
  }).isRequired,
  toggleSelection: func.isRequired,
};

SingleSelect.defaultProps = {
  selection: null,
};

export default SingleSelect;
