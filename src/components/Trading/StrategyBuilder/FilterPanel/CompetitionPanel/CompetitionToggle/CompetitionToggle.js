import React from 'react';
import { bool, func } from 'prop-types';

import CompetitionToggleWrapper from './CompetitionToggleWrapper';

const CompetitionToggle = (props) => {
  const { checked, onChange } = props;

  return (
    <CompetitionToggleWrapper>
      <label htmlFor="competition-toggle">
        Select all
        <input
          type="checkbox"
          id="competition-toggle"
          checked={checked}
          onChange={onChange}
        />
      </label>
    </CompetitionToggleWrapper>
  );
};

CompetitionToggle.propTypes = {
  checked: bool.isRequired,
  onChange: func.isRequired,
};

export default CompetitionToggle;
