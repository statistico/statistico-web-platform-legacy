import React from 'react';
import { bool, func, string } from 'prop-types';

import CompetitionCheckboxWrapper from './CompetitionCheckboxWrapper';

const CompetitionCheckbox = (props) => {
  const { country, label, name, checked, onChange } = props;

  return (
    <CompetitionCheckboxWrapper>
      <label htmlFor={name}>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
        />
        <img
          src={`${process.env.PUBLIC_URL}/country/${country}.jpg`}
          alt={name}
        />
        {label}
      </label>
    </CompetitionCheckboxWrapper>
  );
};

CompetitionCheckbox.propTypes = {
  country: string.isRequired,
  label: string.isRequired,
  name: string.isRequired,
  checked: bool.isRequired,
  onChange: func.isRequired,
};

export default CompetitionCheckbox;
