import React from 'react';

import OddsSelectWrapper from './OddsSelectWrapper';
import SingleFilter from '../../../../../SingleFilter/SingleFilter';

import odds from '../../../../../../config/odds';
import selectStyles from '../../../../../../config/form-styles';

const OddsSelect = () => {
  return (
    <OddsSelectWrapper>
      <SingleFilter
        selection={null}
        selections={odds}
        styles={selectStyles}
        title="Min Odds"
        toggleSelection={() => {}}
      />
      <SingleFilter
        selection={null}
        selections={odds}
        styles={selectStyles}
        title="Max Odds"
        toggleSelection={() => {}}
      />
    </OddsSelectWrapper>
  );
};

export default OddsSelect;
