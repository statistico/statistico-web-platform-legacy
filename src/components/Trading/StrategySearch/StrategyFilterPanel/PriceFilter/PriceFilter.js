import React, { useState } from 'react';
import styled from 'styled-components';

import PriceFilterWrapper from './PriceFilterWrapper';
import SingleFilter from '../../../../SingleFilter/SingleFilter';
import odds from '../../../../../config/odds';
import selectStyles from '../../../../../config/form-styles';

const MinOdds = styled.div`
  width: 90%;
  margin-right: 10px;
`;

const MaxOdds = styled.div`
  width: 90%;
  margin-left: 10px;
`;

const PriceFilter = () => {
  const [minOdds, toggleMinOdds] = useState(null);
  const [maxOdds, toggleMaxOdds] = useState(null);

  return (
    <PriceFilterWrapper>
      <MinOdds>
        <SingleFilter
          selection={minOdds}
          selections={odds}
          styles={selectStyles}
          title="Min Odds"
          toggleSelection={toggleMinOdds}
        />
      </MinOdds>
      <MaxOdds>
        <SingleFilter
          selection={maxOdds}
          selections={odds}
          styles={selectStyles}
          title="Max Odds"
          toggleSelection={toggleMaxOdds}
        />
      </MaxOdds>
    </PriceFilterWrapper>
  );
};

export default PriceFilter;
