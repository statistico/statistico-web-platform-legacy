import React from 'react';
import PropTypes from 'prop-types';

import Aux from '../../../hoc/Aux/Aux';
import ContentWrapper from '../../ContentWrapper/ContentWrapper';
import Dashboard from '../../Dashboard/Dashboard';
import Loader from '../../Loader/Loader';
import TeamStatsMatch from '../TeamStatsMatch/TeamStatsMatch';
import TeamStatsSideBar from '../TeamStatsSideBar/TeamStatsSideBar';
import useTogglesActiveState from '../../../hooks/useTogglesActiveState';
import useFetchesTeamSeasons from '../../../hooks/useFetchesTeamSeasons';

const TeamStatsDashBoard = (props) => {
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
      <TeamStatsSideBar
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
          Stats - To be implemented
        </ContentWrapper>
        <ContentWrapper active={selected === 3}>
          Timelines - To be implemented
        </ContentWrapper>
      </Dashboard>
    </Aux>
  );
};

TeamStatsDashBoard.propTypes = {
  team: PropTypes.shape({
    id: PropTypes.number,
    logo: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
};

export default TeamStatsDashBoard;
