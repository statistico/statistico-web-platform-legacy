import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Loader from '../../../Loader/Loader';
import useFetchesTeamStat from '../../../../hooks/useFetchesTeamStat';
import TeamStatsCardHeader from './TeamStatsCardHeader/TeamStatsCardHeader';
import TeamStatsCounts from '../TeamStatsCounts/TeamStatsCounts';
import TeamStatGraph from '../TeamStatGraph/TeamStatsGraph';
import TeamStatToggle from './TeamStatsToggle/TeamStatsToggle';

import classes from './TeamStatsCard.module.css';

const TeamStatsCard = (props) => {
  const {
    displayCounts,
    displayGraph,
    remove,
    seasonIds,
    stat,
    teamId,
  } = props;

  const [dateAfter, setDateAfter] = useState(null);
  const [dateBefore, setDateBefore] = useState(null);
  const [showOpponent, setShowOpponent] = useState(false);
  const [showFilters, setShowFilters] = useState(true);
  const [venue, setVenue] = useState(null);

  const { stats, loading, reload } = useFetchesTeamStat(
    dateAfter,
    dateBefore,
    null,
    showOpponent,
    seasonIds,
    stat.label.split(' ').join('_').toLowerCase(),
    teamId,
    venue
  );

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  let display = null;

  if (displayCounts) {
    display = (
      <TeamStatsCounts
        isOpponent={showOpponent}
        stat={stat.label}
        stats={stats}
      />
    );
  }

  if (displayGraph) {
    display = <TeamStatGraph isOpponent={showOpponent} stats={stats} />;
  }

  if (stats.length === 0) {
    display = <p>No stats to show</p>;
  }

  return (
    <div className={classes.TeamStatsCard}>
      <TeamStatsCardHeader
        reload={reload}
        remove={remove}
        stat={stat}
        toggleFilters={toggleFilters}
      />
      <div className={classes.TeamStatsCardDisplay}>
        <Loader loading={loading}>{display}</Loader>
      </div>
      {showFilters ? (
        <TeamStatToggle
          dateAfter={dateAfter}
          dateBefore={dateBefore}
          showOpponent={showOpponent}
          toggleDateAfter={setDateAfter}
          toggleDateBefore={setDateBefore}
          toggleOpponent={setShowOpponent}
          toggleVenue={setVenue}
          venue={venue}
        />
      ) : null}
    </div>
  );
};

TeamStatsCard.propTypes = {
  displayCounts: PropTypes.bool.isRequired,
  displayGraph: PropTypes.bool.isRequired,
  remove: PropTypes.func.isRequired,
  seasonIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  stat: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
  }).isRequired,
  teamId: PropTypes.number.isRequired,
};

export default TeamStatsCard;
