import React from 'react';
import { bool, func, string } from 'prop-types';

import CompetitionCheckboxWrapper from './CompetitionCheckboxWrapper';

const CompetitionCheckbox = (props) => {
  const { country, id, name, checked, onChange } = props;

  return (
    <CompetitionCheckboxWrapper checked={checked}>
      <label htmlFor={name}>
        <input
          type="checkbox"
          name={id}
          checked={checked}
          onChange={onChange}
        />
        <img
          src={`${process.env.PUBLIC_URL}/country/${country}.jpg`}
          alt={id}
        />
        {name}
      </label>
    </CompetitionCheckboxWrapper>
  );
};

CompetitionCheckbox.propTypes = {
  country: string.isRequired,
  id: string.isRequired,
  name: string.isRequired,
  checked: bool.isRequired,
  onChange: func.isRequired,
};

export default CompetitionCheckbox;
