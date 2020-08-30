import React from 'react';
import PropTypes from 'prop-types';

import Loader from '../../../Loader/Loader';
import useFetchesTeamStat from '../../../../hooks/useFetchesTeamStat';
import TeamStatsCardHeader from './TeamStatsCardHeader/TeamStatsCardHeader';
import TeamStatsCounts from './TeamStatsCounts/TeamStatsCounts';

const TeamStatsCard = (props) => {
  const { remove, seasonIds, stat, styles, teamId } = props;

  const { stats, loading } = useFetchesTeamStat(
    null,
    null,
    null,
    null,
    seasonIds,
    stat.label.split(' ').join('_').toLowerCase(),
    teamId,
    null
  );

  return (
    <div className={styles}>
      <Loader loading={loading}>
        <TeamStatsCardHeader remove={remove} stat={stat} />
        <TeamStatsCounts stat={stat.label} stats={stats} />
      </Loader>
    </div>
  );
};

TeamStatsCard.propTypes = {
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
