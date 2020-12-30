import React, { useState } from 'react';
import styled from 'styled-components';

import PriceFilterWrapper from './PriceFilterWrapper';
import SingleFilter from '../../../../SingleFilter/SingleFilter';
import odds from '../../../../../config/odds';

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
          styles={styles}
          title="Min Odds"
          toggleSelection={toggleMinOdds}
        />
      </MinOdds>
      <MaxOdds>
        <SingleFilter
          selection={maxOdds}
          selections={odds}
          styles={styles}
          title="Max Odds"
          toggleSelection={toggleMaxOdds}
        />
      </MaxOdds>
    </PriceFilterWrapper>
  );
};

export default PriceFilter;
