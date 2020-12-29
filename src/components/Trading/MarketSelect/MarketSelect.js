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

const MarketSelect = (props) => {
  const { markets, selectedMarket, styles, toggleMarket } = props;

  const options = markets.map((market) => {
    return {
      value: market.name,
      label: market.label,
    };
  });

  const onChangeInput = (value) => {
    const m = markets.find((market) => market.name === value.value);
    toggleMarket(m);
  };

  const defaultValue = () => {
    if (selectedMarket == null) {
      return null;
    }

    return {
      value: selectedMarket.name,
      label: selectedMarket.label,
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

MarketSelect.propTypes = {
  markets: arrayOf(
    shape({
      name: string.isRequired,
      label: string.isRequired,
    })
  ).isRequired,
  selectedMarket: oneOfType([
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
  toggleMarket: func.isRequired,
};

MarketSelect.defaultProps = {
  selectedMarket: null,
};

export default MarketSelect;
