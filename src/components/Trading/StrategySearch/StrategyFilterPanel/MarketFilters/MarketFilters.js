import React from 'react';
import {
  arrayOf,
  func,
  instanceOf,
  oneOfType,
  shape,
  string,
} from 'prop-types';

import SingleSelect from '../../../../SingleSelect/SingleSelect';
import MarketFiltersWrapper from './MarketFiltersWrapper';

const selectStyles = {
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

  control: (styles) => ({
    ...styles,
    cursor: 'pointer',
  }),
};

const MarketFilters = (props) => {
  const { market, markets, toggleMarket } = props;

  return (
    <MarketFiltersWrapper>
      <p>Market:</p>
      <SingleSelect
        selections={markets}
        selection={market}
        styles={selectStyles}
        toggleSelection={toggleMarket}
      />
    </MarketFiltersWrapper>
  );
};

MarketFilters.propTypes = {
  market: oneOfType([
    shape({
      name: string.isRequired,
      label: string.isRequired,
    }).isRequired,
    instanceOf(null),
  ]),
  markets: arrayOf(
    shape({
      name: string.isRequired,
      label: string.isRequired,
    })
  ).isRequired,
  toggleMarket: func.isRequired,
};

MarketFilters.defaultProps = {
  market: null,
};

export default MarketFilters;
