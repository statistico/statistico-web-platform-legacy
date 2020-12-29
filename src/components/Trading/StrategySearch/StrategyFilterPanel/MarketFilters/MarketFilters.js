import React from 'react';
import {
  arrayOf,
  func,
  instanceOf,
  oneOfType,
  shape,
  string,
} from 'prop-types';

import MarketSelect from '../../../MarketSelect/MarketSelect';
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

  option: (styles, state) => ({
    ...styles,
    cursor: 'pointer',
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
      <MarketSelect
        markets={markets}
        selectedMarket={market}
        styles={selectStyles}
        toggleMarket={toggleMarket}
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
