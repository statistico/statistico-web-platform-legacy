import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

const stats = [
  'Attacks Dangerous',
  'Attacks Total',
  'Corners',
  'Fouls',
  'Goals',
  'Goal Attempts',
  'Offsides',
  'Passes Accuracy',
  'Passes Percentage',
  'Passes Total',
  'Possession',
  'Red Cards',
  'Saves',
  'Shots Blocked',
  'Shots Inside Box',
  'Shots Off Goal',
  'Shots On Goal',
  'Shots Outside Box',
  'Shots Total',
  'Yellow Cards',
  'xG',
];

const teamStatsSelect = ({ addStat }) => {
  const options = stats.map((stat) => {
    return {
      value: stat,
      label: stat,
    };
  });

  const styles = {
    container: (provided) => ({
      ...provided,
      width: '15%',
      padding: '10px 0 10px 0',
    }),
  };

  return (
    <Select
      options={options}
      onChange={(value) => addStat(value.value)}
      placeholder="Add a stat..."
      styles={styles}
      value={null}
    />
  );
};

teamStatsSelect.propTypes = {
  addStat: PropTypes.func.isRequired,
};

export default teamStatsSelect;
