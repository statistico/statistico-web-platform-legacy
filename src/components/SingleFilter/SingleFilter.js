import React from 'react';
import Select from 'react-select';
import {
  arrayOf,
  func,
  instanceOf,
  oneOfType,
  shape,
  string,
} from 'prop-types';

import SingleFilterWrapper from './SingleFilterWrapper';

const styles = {
  container: (provided) => ({
    ...provided,
    width: '100%',
    textAlign: 'left',
    fontSize: '18px',
  }),

  valueContainer: (provided) => ({
    ...provided,
    justifyContent: 'left',
    color: '#1d1d1d',
  }),

  control: (provided) => ({
    ...provided,
    cursor: 'pointer',
  }),
};

const SingleFilter = (props) => {
  const { selection, selections, title, toggleSelection } = props;

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
    <SingleFilterWrapper>
      <p>{title}:</p>
      <Select
        options={options}
        value={defaultValue()}
        onChange={onChangeInput}
        styles={styles}
        placeholder={null}
        isClearable
      />
    </SingleFilterWrapper>
  );
};

SingleFilter.propTypes = {
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
  title: string.isRequired,
  toggleSelection: func.isRequired,
};

SingleFilter.defaultProps = {
  selection: null,
};

export default SingleFilter;
