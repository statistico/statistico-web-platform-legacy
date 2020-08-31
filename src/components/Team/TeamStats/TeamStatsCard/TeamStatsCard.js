import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Loader from '../../../Loader/Loader';
import useFetchesTeamStat from '../../../../hooks/useFetchesTeamStat';
import TeamStatsCardHeader from './TeamStatsCardHeader/TeamStatsCardHeader';
import TeamStatsCounts from './TeamStatsCounts/TeamStatsCounts';
import TeamStatGraph from '../TeamStatGraph/TeamStatsGraph';
import TeamStatToggle from './TeamStatsToggle/TeamStatsToggle';

const TeamStatsCard = (props) => {
  const {
    displayCounts,
    displayGraph,
    remove,
    seasonIds,
    stat,
    styles,
    teamId,
  } = props;

  const [venue, setVenue] = useState(null);

  const { stats, loading } = useFetchesTeamStat(
    null,
    null,
    null,
    null,
    seasonIds,
    stat.label.split(' ').join('_').toLowerCase(),
    teamId,
    venue
  );

  let display = null;

  if (displayCounts) {
    display = <TeamStatsCounts stats={stats} />;
  }

  if (displayGraph) {
    display = <TeamStatGraph stats={stats} />;
  }

  if (stats.length === 0) {
    display = <p>No stats to show</p>;
  }

  return (
    <div className={styles}>
      <TeamStatsCardHeader remove={remove} stat={stat} />
      <Loader loading={loading}>{display}</Loader>
      <TeamStatToggle venue={venue} toggleVenue={setVenue} />
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
  styles: PropTypes.string.isRequired,
  teamId: PropTypes.number.isRequired,
};

export default TeamStatsCard;
