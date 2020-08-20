import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

import classes from './SeasonSelect.module.css';

const seasonSelect = (props) => {
  const { seasons, selectedSeasons, toggleSeasons } = props;

  const options = seasons.map((season) => {
    return {
      value: season.seasonIds,
      label: season.name,
    };
  });

  const onChangeInput = (value) => {
    const s = seasons.filter((season) => season.name === value.label);
    toggleSeasons(s[0]);
  };

  const defaultValue = () => {
    const s = options.filter((option) => option.label === selectedSeasons.name);
    return s[0];
  };

  return (
    <div className={classes.SeasonSelect}>
      <Select
        options={options}
        defaultValue={defaultValue()}
        onChange={onChangeInput}
      />
    </div>
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
  selectedSeasons: PropTypes.shape({
    name: PropTypes.string,
    current: PropTypes.bool,
    seasonIds: PropTypes.arrayOf(PropTypes.number),
  }).isRequired,
  toggleSeasons: PropTypes.func.isRequired,
};

export default seasonSelect;
