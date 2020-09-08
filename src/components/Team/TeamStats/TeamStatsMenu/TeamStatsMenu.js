import React from 'react';
import ReactTooltip from 'react-tooltip';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator, faChartBar } from '@fortawesome/free-solid-svg-icons';

import TeamStatsSelect from '../TeamStatsSelect/TeamStatsSelect';
import classes from './TeamStatsMenu.module.css';

const teamStatsMenu = ({ addStat, statDisplay }) => {
  const selectStyles = {
    container: (provided) => ({
      ...provided,
      width: '15%',
      padding: '10px 0 10px 0',
    }),
  };

  return (
    <div className={classes.TeamStatsMenu}>
      <div className={classes.Icons}>
        <span
          onClick={statDisplay}
          role="button"
          onKeyDown={statDisplay}
          tabIndex={0}
          data-tip
          data-for="countsToggle"
        >
          <FontAwesomeIcon icon={faCalculator} size="2x" />
        </span>
        <span
          onClick={statDisplay}
          role="button"
          onKeyDown={statDisplay}
          tabIndex={0}
          data-tip
          data-for="graphToggle"
        >
          <FontAwesomeIcon icon={faChartBar} size="2x" />
        </span>
      </div>
      <TeamStatsSelect addStat={addStat} styles={selectStyles} />
      <ReactTooltip id="countsToggle" place="top" effect="float">
        Display stats as count data
      </ReactTooltip>
      <ReactTooltip id="graphToggle" place="top" effect="float">
        Display stats as bar charts
      </ReactTooltip>
    </div>
  );
};

teamStatsMenu.propTypes = {
  addStat: PropTypes.func.isRequired,
  statDisplay: PropTypes.func.isRequired,
};

export default teamStatsMenu;
