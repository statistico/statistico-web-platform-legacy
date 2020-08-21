import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux/Aux';
import ContentWrapper from '../../ContentWrapper/ContentWrapper';
import Dashboard from '../../Dashboard/Dashboard';
import Loader from '../../Loader/Loader';
import TeamStats from '../TeamStats/TeamStats';
import TeamStatsMatch from '../TeamMatch/TeamMatch';
import TeamSideBar from '../TeamSideBar/TeamSideBar';
import useTogglesActiveState from '../../../hooks/useTogglesActiveState';
import useFetchesTeamSeasons from '../../../hooks/useFetchesTeamSeasons';

const TeamDashboard = (props) => {
  const { team } = props;
  const { seasons, selectedSeason, toggleSeason } = useFetchesTeamSeasons(
    team.id
  );
  const { selected, selectionToggleHandler } = useTogglesActiveState(0);

  if (seasons.length === 0) {
    return <Loader loading />;
  }

  return (
    <Aux>
      <TeamSideBar
        team={team}
        selected={selected}
        toggleDisplay={selectionToggleHandler}
        seasons={seasons}
        selectedSeason={selectedSeason}
        toggleSeason={toggleSeason}
      />
      <Dashboard>
        <ContentWrapper active={selected === 0}>
          <TeamStatsMatch
            seasonIds={selectedSeason.seasonIds}
            teamId={team.id}
          />
        </ContentWrapper>
        <ContentWrapper active={selected === 1}>
          Players - To be implemented
        </ContentWrapper>
        <ContentWrapper active={selected === 2}>
          <TeamStats seasonIds={selectedSeason.seasonIds} teamId={team.id} />
        </ContentWrapper>
        <ContentWrapper active={selected === 3}>
          Timelines - To be implemented
        </ContentWrapper>
      </Dashboard>
    </Aux>
  );
};

TeamDashboard.propTypes = {
  team: PropTypes.shape({
    id: PropTypes.number,
    logo: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default TeamDashboard;
