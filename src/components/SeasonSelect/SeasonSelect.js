import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const seasonSelect = (props) => {
  const { seasons, selectedSeason, toggleSeason } = props;

  const options = seasons.map((season) => {
    return {
      value: season.seasonIds,
      label: season.name,
    };
  });

  const onChangeInput = (value) => {
    const s = seasons.find((season) => season.name === value.label);
    toggleSeason(s);
  };

  const defaultValue = () => {
    return {
      value: selectedSeason.seasonIds,
      label: selectedSeason.name,
    };
  };

  const customStyles = {
    container: (provided) => ({
      ...provided,
      width: '80%',
      textAlign: 'center',
      margin: '0 0 10px 0',
      padding: '10px 0 10px 0',
    }),

    valueContainer: (provided) => ({
      ...provided,
      justifyContent: 'center',
      color: '#22ccde',
    }),

    singleValue: (provided) => ({
      ...provided,
      fontWeight: 'bold',
    }),
  };

  return (
    <Select
      options={options}
      defaultValue={defaultValue()}
      onChange={onChangeInput}
      styles={customStyles}
    />
  );
};

seasonSelect.propTypes = {
  seasons: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      current: PropTypes.bool,
      seasonIds: PropTypes.arrayOf(PropTypes.number),
    })
  ).isRequired,
  selectedSeason: PropTypes.shape({
    name: PropTypes.string,
    current: PropTypes.bool,
    seasonIds: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  toggleSeason: PropTypes.func.isRequired,
};

export default seasonSelect;
